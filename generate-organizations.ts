import fs from "fs";
import slugify from "slugify";

import { Organization as OrganizationModel } from "./types";

const TEAM_REQUESTS_URL = "https://nonprofits.github.com/api/team_requests";

slugify.extend({
  "#": "sharp",
  "+": "plus"
});

interface TeamRequest {
  id: number;
  status: string;
  project_request: string;
  request_description: string;
  nonprofit_description: string;
  programming_language: string;
  number_of_volunteers: number;
  stakeholder_available: boolean;
  website_url: string;
  issue_url: string;
  organization_name: string;
  created_at: string;
  updated_at: string;
}

interface TeamRequestsResponse {
  team_requests: TeamRequest[];
}

const getTeamRequests = async (): Promise<TeamRequest[]> => {
  const token = process.env.TEAM_REQUESTS_TOKEN;
  if (!token) {
    throw new Error(
      "Missing TEAM_REQUESTS_TOKEN environment variable. Set it to the team_requests API token."
    );
  }

  const response = await fetch(TEAM_REQUESTS_URL, {
    headers: {
      Authorization: `Token ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch team requests: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as TeamRequestsResponse;
  return data.team_requests ?? [];
};

const toOrganization = (request: TeamRequest): OrganizationModel => ({
  id: String(request.id),
  name: request.organization_name,
  url: request.website_url,
  description: request.nonprofit_description,
  language: {
    id: slugify(request.programming_language.toLowerCase()),
    display: request.programming_language
  },
  volunteers_needed: request.number_of_volunteers,
  stakeholder_available: request.stakeholder_available,
  project_ask: request.request_description,
  issue_url: request.issue_url,
  is_claimed: false
});

getTeamRequests()
  .then((requests) => {
    const organizations = requests
      .filter((request) => request.status === "approved")
      .map(toOrganization);

    fs.writeFileSync("./organizations.json", JSON.stringify(organizations, null, 2));
    console.log(`Generated organizations.json (${organizations.length} organizations)`);
  })
  .catch((error: unknown) => {
    console.error("Skipping organization data generation:", error);
    if (!fs.existsSync("./organizations.json")) {
      fs.writeFileSync("./organizations.json", JSON.stringify([], null, 2));
      console.log("Wrote empty organizations.json fallback.");
    } else {
      console.log("Keeping existing organizations.json.");
    }
  })
  .finally(() => {
    console.log("Organization data generation complete.");
  });
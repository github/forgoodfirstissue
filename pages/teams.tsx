import Head from "next/head";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { TeamsHeroContainer } from "../components/TeamsHeroContainer";
import { OrganizationList } from "../components/OrganizationList";

import organizationsData from "../organizations.json";
import { Organization } from "../types";

const organizations: Organization[] = organizationsData as Organization[];

export default function Teams() {
  return (
    <>
      <Head>
        <title>For Good First Issue | Team contributing for nonprofits</title>
      </Head>

      <Header />

      <TeamsHeroContainer />

      <div className="section-vertical">
        <OrganizationList organizations={organizations} />
      </div>

      <Footer />
    </>
  );
}
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Organization } from "../types";
import { LanguageFilter } from "./LanguageFilter";
import { OrganizationItem } from "./OrganizationItem";
import { Grid, Stack } from "@primer/react-brand";
import { GeneralFilter } from "./GeneralFilter";

type OrganizationListProps = {
  organizations: Organization[];
};

const Loader = () => (
  <div className="p-4 w-full flex items-center justify-center">
    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
  </div>
);

export const OrganizationList = ({ organizations }: OrganizationListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = useState(itemsPerScroll);
  const [filter, setFilter] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const filteredOrganizations = organizations.filter((org) => {
    const languageFilter =
      selectedLanguages.length === 0 || selectedLanguages.includes(org.language.display);

    const nameFilter =
      org.name.toLowerCase().includes(filter.toLowerCase()) ||
      org.description.toLowerCase().includes(filter.toLowerCase());

    return languageFilter && nameFilter;
  });

  const uniqueLanguages = [...new Set(organizations.map((org) => org.language.display))];
  const languageOptions = uniqueLanguages.map((language) => ({ value: language, label: language }));

  const loadMoreItems = () => setItems(items + itemsPerScroll);
  const hasMoreItems = items < filteredOrganizations.length;

  return (
    <main className="repoWrap">
      <div className="grid-wrap">
        <Grid>
          <Grid.Column span={{ xsmall: 12, small: 12, medium: 12, large: 5, xlarge: 3 }}>
            <Stack className="stack">
              <div className="search-wrap">
                <GeneralFilter
                  filter={filter}
                  setFilter={
                    setFilter as (filter: string | number | readonly string[] | undefined) => void
                  }
                />
              </div>
              <LanguageFilter
                setSelectedLanguages={setSelectedLanguages}
                languageOptions={languageOptions}
              />
            </Stack>
          </Grid.Column>
          <Grid.Column
            className="org-list-wrap"
            span={{ xsmall: 12, small: 12, medium: 12, large: 7, xlarge: 9 }}
          >
            <InfiniteScroll
              dataLength={items}
              next={loadMoreItems}
              hasMore={hasMoreItems}
              loader={<Loader />}
            >
              {filteredOrganizations.slice(0, items).map((org) => (
                <OrganizationItem key={org.id} organization={org} />
              ))}
            </InfiniteScroll>
          </Grid.Column>
        </Grid>
      </div>
    </main>
  );
};
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { IndexedTopics } from "../topics";
import { Repository } from "../types";
import { FilterInfo } from "./FilterInfo";
import { LanguageFilter } from "./LanguageFilter";
import { RepositoryItem } from "./RepositoryItem";
import { SDGFilter } from "./SDGFilter";
import { ProjectHeader } from "./ProjectHeader";

type RepositoryListProps = {
  repositories: Repository[];
  filter: string;
};

const Loader = () => (
  <div className="p-4 w-full flex items-center justify-center">
    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
  </div>
);

export const RepositoryList = ({ repositories, filter }: RepositoryListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = useState(itemsPerScroll);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const filteredRepositories = repositories.filter((repository) => {
    const languageFilter =
      selectedLanguages.length === 0 || selectedLanguages.includes(repository.language.display);
    const topicFilter =
      selectedTopics.length === 0 ||
      repository.topics?.some((topic) => selectedTopics.includes(topic.display));
    const nameFilter = Object.values(repository).some(
      (value) => value && value.toString().toLowerCase().includes(filter.toLowerCase())
    );
    return languageFilter && nameFilter && topicFilter;
  });

  const uniqueLanguages = [
    ...new Set(repositories.map((repository) => repository.language.display))
  ];
  const languageOptions = uniqueLanguages.map((language) => ({ value: language, label: language }));

  const uniqueTopics = [
    ...new Set(
      repositories.flatMap((repository) => repository.topics?.map((topic) => topic.display) ?? [])
    )
  ].sort((a, b) => parseInt(a.slice(4)) - parseInt(b.slice(4)));
  const topicOptions = uniqueTopics.map((topic) => ({ value: topic, label: IndexedTopics[topic] }));

  const loadMoreItems = () => setItems(items + itemsPerScroll);
  const hasMoreItems = items < filteredRepositories.length;

  return (
    <main className="grow">
      <div className="p-4 w-full">
        <div className="flex justify-center">
          <div className="w-[85%] justify-start items-start inline-flex mb-4">
            <FilterInfo />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[85%] justify-start items-start inline-flex mb-8">
            <div className="w-full grid grid-cols-2 gap-4">
              <div>
                <LanguageFilter
                  setSelectedLanguages={setSelectedLanguages}
                  languageOptions={languageOptions}
                />
              </div>
              <div>
                <SDGFilter setSelectedTopics={setSelectedTopics} topicOptions={topicOptions} />
              </div>
            </div>
          </div>
        </div>

        <ProjectHeader />
        <InfiniteScroll
          dataLength={items}
          next={loadMoreItems}
          hasMore={hasMoreItems}
          loader={<Loader />}
        >
          {filteredRepositories.slice(0, items).map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};

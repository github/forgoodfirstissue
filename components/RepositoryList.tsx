import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";

type RepositoryListProps = {
  repositories: Repository[];
};

const indexedTopics: { [key: string]: string } = {
  "sdg-1": "SDG-1 - No Poverty",
  "sdg-2": "SDG-2 - Zero Hunger",
  "sdg-3": "SDG-3 - Good Health And Well-Being",
  "sdg-4": "SDG-4 - Quality Education",
  "sdg-5": "SDG-5 - Gender Equality",
  "sdg-6": "SDG-6 - Clean Water and Sanitation",
  "sdg-7": "SDG-7 - Affordable and Clean Energy",
  "sdg-8": "SDG-8 - Decent Work and Economic Growth",
  "sdg-9": "SDG-9 - Industry, Innovation, and Infrastructure",
  "sdg-10": "SDG-10 - Reduced Inequalities",
  "sdg-11": "SDG-11 - Sustainable Cities and Communities",
  "sdg-12": "SDG-12 - Responsible Consumption and Production",
  "sdg-13": "SDG-13 - Climate Action",
  "sdg-14": "SDG-14 - Life Below Water",
  "sdg-15": "SDG-15 - Life on Land",
  "sdg-16": "SDG-16 - Peace, Justice, and Strong Institutions",
  "sdg-17": "SDG-17 - Partnerships for the Goals"
};

const Loader = () => (
  <div className="p-4 w-full">
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </div>
  </div>
);

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = useState(itemsPerScroll);
  const [filter, setFilter] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  console.log(selectedTopics);
  const filteredRepositories = repositories.filter((repository) => {
    const languageFilter =
      selectedLanguages.length === 0 || selectedLanguages.includes(repository.language.display);

    const topicFilter =
      selectedTopics.length === 0 ||
      selectedTopics.some((value) => repository.topics?.some((topic) => topic.display === value));

    const nameFilter = Object.values(repository).some((value) => {
      if (value === null) {
        return false;
      }
      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });

    return languageFilter && nameFilter && topicFilter;
  });

  const allLanguages = repositories.map((repository) => repository.language.display);
  const uniqueLanguages = allLanguages.filter(
    (language, index) => allLanguages.indexOf(language) === index
  );
  const languageOptions = uniqueLanguages.map((language) => ({
    value: language,
    label: language
  }));

  const topicList = repositories.map((repository) => repository.topics);
  const allTopics = topicList.map((repos) => repos?.map((topic) => topic.display)) ?? [];
  const uniqueTopics = allTopics
    .filter((topic, index) => allTopics.indexOf(topic) === index)
    .flat();
  const topicOptions = uniqueTopics.map((topic) => ({
    value: topic,
    label: indexedTopics[topic ?? ""]
  }));

  return (
    <main className="grow">
      <div className="p-4 w-full">
        <div className="flex flex-wrap">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search Repositories"
            className="flex-1 mx-2 border rounded-sm p-2 mb-4"
          />
          <label className="p-2">Filter by Language</label>
          <Select
            isMulti
            closeMenuOnSelect={false}
            className="flex-1 mx-2 border rounded-sm p-2 mb-4"
            onChange={(selectedOptions) => {
              setSelectedLanguages(selectedOptions.map((option) => option.value));
            }}
            options={languageOptions}
            classNamePrefix="select"
          />
          <label className="p-2">Sustainable Development Goal (SDG)</label>
          <Select
            isMulti
            className="flex-1 mx-2 border rounded-sm p-2 mb-4"
            options={topicOptions}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value ?? ""}
            onChange={(selectedOptions) => {
              setSelectedTopics(selectedOptions.map((option) => option.value ?? ""));
            }}
          />
        </div>

        <InfiniteScroll
          dataLength={items}
          next={() => setItems(items + itemsPerScroll)}
          hasMore={items < filteredRepositories.length}
          loader={<Loader />}
        >
          {filteredRepositories.slice(0, items).map((repository) => {
            const key = `${repository.id}_${new Date().getTime()}_${Math.random()}`;
            return <RepositoryItem key={key} repository={repository} />;
          })}
        </InfiniteScroll>
      </div>
    </main>
  );
};

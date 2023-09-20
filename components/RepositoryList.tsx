import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";
import Select from 'react-select';

type RepositoryListProps = {
  repositories: Repository[];
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

  const filteredRepositories = repositories.filter((repository) => {
    // Check if the repository's language is included in the selected languages array
    const languageFilter = selectedLanguages.length === 0 || selectedLanguages.includes(repository.language.display);

    const nameFilter = Object.values(repository).some((value) => {
      if (value === null) {
        return false;
      }
      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });
  
    return languageFilter && nameFilter;
  });

  const allLanguages = repositories.map((repository) => repository.language.display);
  const uniqueLanguages = allLanguages.filter((language, index) => allLanguages.indexOf(language) === index);
  const languageOptions = uniqueLanguages.map((language) => ({
    value: language,
    label: language,
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

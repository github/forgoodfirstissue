import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";

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

  const filteredRepositories = repositories.filter((repository) => {
    // Check if any property of the RepositoryItem matches the filter value
    return Object.values(repository).some((value) => {
      if (value === null) {
        return false;
      }
      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });
  });

  return (
    <main className="grow">
      <div className="p-4 w-full">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search Repositories"
          className="border rounded-sm p-2 mb-4"
        />
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

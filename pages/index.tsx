import Head from "next/head";
import React, { useState } from "react";

import { RepositoryList } from "../components/RepositoryList";
import { useAppData } from "../hooks/useAppData";
import { Navbar } from "../components/Navbar";
import { HeroContainer } from "../components/HeroContainer";
import { GitHubOctocat } from "../components/GitHubOctocat";
import { Footer } from "../components/Footer";

export default function Home() {
  const { repositories } = useAppData();
  const [filter, setFilter] = useState("");

  const sortedRepositories = repositories.sort((a, b) => {
    if (a.issues > b.issues) {
      return -1; // a comes first
    } else if (a.issues < b.issues) {
      return 1; // b comes first
    } else {
      return 0; // a and b are equal
    }
  });

  return (
    <>
      <Head>
        <title>Happy Commits | Make your next open-source contribution matter.</title>
      </Head>
      <Navbar />
      <HeroContainer filter={filter} setFilter={setFilter} />
      <GitHubOctocat />
      <RepositoryList repositories={sortedRepositories} filter={filter} />
      <Footer />
    </>
  );
}

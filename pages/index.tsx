import Head from "next/head";

import { RepositoryList } from "../components/RepositoryList";
import { useAppData } from "../hooks/useAppData";
import { Navbar } from "../components/Navbar";
import { HeroContainer } from "../components/HeroContainer";

export default function Home() {
  const { repositories } = useAppData();

  return (
    <>
      <Head>
        <title>Happy Commits | Make your next open-source contribution matter.</title>
      </Head>
      <Navbar />
      <HeroContainer />
      <RepositoryList repositories={repositories} />
    </>
  );
}

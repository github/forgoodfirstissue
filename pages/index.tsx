import Head from "next/head";

import { RepositoryList } from "../components/RepositoryList";
import { useAppData } from "../hooks/useAppData";

export default function Home() {
  const { repositories } = useAppData();

  return (
    <>
      <Head>
        <title>Happy Commits | Make your next open-source contribution matter.</title>
      </Head>
      <RepositoryList repositories={repositories} />
    </>
  );
}

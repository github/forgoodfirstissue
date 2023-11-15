import Head from "next/head";
import React, { useState } from "react";

import { RepositoryList } from "../components/RepositoryList";

import { useAppData } from "../hooks/useAppData";

import { HeroContainer } from "../components/HeroContainer";
import { HappyContainer } from "../components/HappyContainer";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import {Grid, Heading, Stack} from '@primer/react-brand';


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
        <title>For Good First Issue | Make your next open-source contribution matter.</title>
      </Head>

      <Header />

      <HeroContainer />

      <div className="section-vertical">
        <div className="grid-wrap grid-wrap--first">
          <Grid>
            <Grid.Column span={{xsmall: 12, small: 12, medium: 12, large: 5, xlarge: 3}}>
              <Stack className="stack">
                <Heading size="6">Find a project</Heading>
                <HappyContainer filter={filter} setFilter={setFilter} />
              </Stack>
            </Grid.Column>
          </Grid>
        </div>

        <RepositoryList repositories={sortedRepositories} filter={filter} />

      </div>

      <Footer />
    </>
  );
}

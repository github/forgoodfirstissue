import { Hero } from "@primer/react-brand";

export const TeamsHeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Heading size="display">Your team&apos;s skills,&nbsp;their mission</Hero.Heading>
        <Hero.Description size="300">
          The best open-source contributions happen when passionate teams rally behind a cause.
          Browse nonprofits below and find one whose mission resonates with your team — then dive
          into a project that puts your collective skills to work for lasting, real-world impact.
          <br />
          <br />
          If you represent a nonprofit looking to have a team of volunteers contribute to your
          organization, you can{" "}
          <a href="https://nonprofits.github.com" target="_blank" rel="noopener noreferrer">
            request volunteers at nonprofits.github.com
          </a>
          .
        </Hero.Description>
      </Hero>
    </>
  );
};

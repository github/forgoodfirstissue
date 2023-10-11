import {Hero} from '@primer/react-brand';

export const HeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Label>Happy Commits</Hero.Label>
        <Hero.Heading size="display">Open Source Social Impact Projects</Hero.Heading>
        <Hero.Description size="300">
          Committing to a better future. Our mission is to curate a list of open source projects with missions that are driven by social impact. Helping others is the best way to feel happy so lets all work together to build a better tomorrow. One commit at a time.
        </Hero.Description>
      </Hero>
    </>
  );
};

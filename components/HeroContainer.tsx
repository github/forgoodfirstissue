import {Hero} from '@primer/react-brand';

export const HeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Heading size="display">Committing to a better&nbsp;future</Hero.Heading>
        <Hero.Description size="300">
          Lend your skills to an open source project focused on the <a href="https://digitalpublicgoods.net/digital-public-goods/" target="_blank" rel="noopener noreferrer">Digital Public Goods (DPGs)</a> From fighting climate change, to solving world hunger, your efforts will contribute to creating a better future for everyone. Together, we can drive positive and lasting contributions to the world, one commit at a time.
          <br />
          Explore a DPG repo below to get started.
        </Hero.Description>
      </Hero>
    </>
  );
};

import { GitHubIcon } from "./GitHubIcon";
import { HappyCommitsInfo } from "./HappyCommitsInfo";
import { BinaryCode } from "./BinaryCode";

export const HeroContainer = ({filter, setFilter}) => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(278deg, #26C6D0 10%, #4F5BE3 40%, #604FDD 53%, #4B449A 77%, #3A3A62 98%)",
            overflowX: "hidden", height: 520, overflow: "hidden"
        }}
      >
        <GitHubIcon />
        <HappyCommitsInfo filter={filter} setFilter={setFilter} />
        <BinaryCode />
      </div>
    </>
  );
};

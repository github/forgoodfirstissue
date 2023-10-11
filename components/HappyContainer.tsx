import { HappyCommitsInfo } from "./HappyCommitsInfo";

type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const HappyContainer = ({filter, setFilter}: FilterProps) => {
  return (
    <>
      <HappyCommitsInfo filter={filter} setFilter={setFilter} />
    </>
  );
};

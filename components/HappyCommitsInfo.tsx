import { GeneralFilter } from "./GeneralFilter";
type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const HappyCommitsInfo = ({filter, setFilter}: FilterProps) => {
  return (
    <div className="search-wrap">
      <GeneralFilter
        filter={filter}
        setFilter={setFilter as (filter: string | number | readonly string[] | undefined) => void}
      />
    </div>
  );
};

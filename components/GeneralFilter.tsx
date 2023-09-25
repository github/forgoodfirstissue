import { FaSearch } from "react-icons/fa";

type GeneralFilterProps = {
  filter: string | number | readonly string[] | undefined;
  setFilter: (filter: string | number | readonly string[] | undefined) => void;
};

export const GeneralFilter = ({ filter, setFilter }: GeneralFilterProps) => {
  return (
    <div className="flex border bg-vanilla-100 rounded-sm mr-4">
      <FaSearch className="self-center mr-2 ml-2" />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Repositories"
        className="flex-1 rounded-sm p-2"
      />
    </div>
  );
};

type GeneralFilterProps = {
  filter: string | number | readonly string[] | undefined;
  setFilter: (filter: string | number | readonly string[] | undefined) => void;
};

export const GeneralFilter = ({ filter, setFilter }: GeneralFilterProps) => {
  return (
    <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search Repositories" className="flex-1 mx-2 border rounded-sm p-2 mb-4" />
  );
};

import Select from "react-select";

type SDGFilterProps = {
  setSelectedTopics: (topics: string[]) => void;
  topicOptions: { value: string; label: string }[];
};

export const SDGFilter = ({ setSelectedTopics, topicOptions }: SDGFilterProps) => {
  return (
    <>
      <label className="p-2">Sustainable Development Goal (SDG)</label>
      <Select
        isMulti
        className="flex-1 mx-2 rounded-sm p-2 mb-4"
        options={topicOptions}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value ?? ""}
        onChange={(selectedOptions) =>
          setSelectedTopics(selectedOptions.map((option) => option.value ?? ""))
        }
      />
    </>
  );
};

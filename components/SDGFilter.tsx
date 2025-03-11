import Select from "react-select";
import { ColorStyles } from "./ColorStyles";

type SDGFilterProps = {
  setSelectedTopics: (topics: string[]) => void;
  topicOptions: { value: string; label: string }[];
};

export const SDGFilter = ({ setSelectedTopics, topicOptions }: SDGFilterProps) => {
  return (
    <>
      <div>
        <label className="label">Sustainable Development Goal (SDG)</label>
        <Select
          isMulti
          className=""
          styles={ColorStyles}
          options={topicOptions}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value ?? ""}
          onChange={(selectedOptions) =>
            setSelectedTopics(selectedOptions.map((option) => option.value ?? ""))
          }
        />
      </div>
    </>
  );
};

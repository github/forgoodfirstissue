import Select from "react-select";
import { ColorStyles } from "./ColorStyles";

type LanguageFilterProps = {
  setSelectedLanguages: (languages: string[]) => void;
  languageOptions: { value: string; label: string }[];
};

export const LanguageFilter = ({ setSelectedLanguages, languageOptions }: LanguageFilterProps) => {
  return (
    <>
      <div>
        <label className="label">Language</label>
        <Select
          styles={ColorStyles}
          isMulti
          closeMenuOnSelect={false}
          className=""
          onChange={(selectedOptions) =>
            setSelectedLanguages(selectedOptions.map((option) => option.value))
          }
          options={languageOptions}
          classNamePrefix="select"
        />
      </div>
    </>
  );
};

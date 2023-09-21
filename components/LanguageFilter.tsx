import Select from "react-select";

type LanguageFilterProps = {
  setSelectedLanguages: (languages: string[]) => void;
  languageOptions: { value: string; label: string }[];
};

export const LanguageFilter = ({ setSelectedLanguages, languageOptions }: LanguageFilterProps) => {
  return (
    <>
    <label className="p-2">Filter by Language</label>
    <Select isMulti closeMenuOnSelect={false} className="flex-1 mx-2 rounded-sm p-2 mb-4" onChange={(selectedOptions) => setSelectedLanguages(selectedOptions.map((option) => option.value))} options={languageOptions} classNamePrefix="select" />
    </>
  );
};

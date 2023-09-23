import { GeneralFilter } from "./GeneralFilter";
type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const HappyCommitsInfo = ({filter, setFilter}: FilterProps) => {
  return (
    <div style={{ paddingLeft: "10%" }}>
      <div style={{ width: 541, height: 291, flexDirection: "column" }}>
        <div
          style={{
            color: "white",
            fontSize: 32,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word"
          }}
        >
          happy commits
        </div>
        <div
          style={{
            color: "white",
            fontSize: 48,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word"
          }}
        >
          open source
          <br />
          social-impact projects
        </div>
        <div
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            paddingBottom: "3%"
          }}
        >
          Our mission is to curate a list of open source projects with missions that are driven by
          social impact. Let’s commit to a better future!
        </div>
        <GeneralFilter
          filter={filter}
          setFilter={setFilter as (filter: string | number | readonly string[] | undefined) => void}
        />
      </div>
    </div>
  );
};

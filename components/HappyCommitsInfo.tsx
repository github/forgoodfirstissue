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
            fontSize: 32
          }}
        >
          happy commits
        </div>
        <div
          style={{
            color: "white",
            fontSize: 48
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
            paddingBottom: "3%"
          }}
        >
          Commiting to a better future. Our mission is to curate a list of open source projects with missions that are driven by social impact. Helping others is the best way to feel happy so lets all work together to build a better tomorrow. One commit at a time.
        </div>
        <GeneralFilter
          filter={filter}
          setFilter={setFilter as (filter: string | number | readonly string[] | undefined) => void}
        />
      </div>
    </div>
  );
};

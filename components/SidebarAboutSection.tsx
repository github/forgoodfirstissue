import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ByLine = () => (
  <div className="text-sm pt-6">
    <a
      className="flex flex-row items-center"
      target="_blank"
      rel="noopener noreferrer"
      href="https://socialimpact.github.com"
    >
      <FontAwesomeIcon icon={faHeart} />
      <span className="ml-2">
        A{" "}
        <span className="inline hover:underline text-juniper" title="Visit GitHub profile">
          @github Social Impact
        </span>{" "}
        initiative
      </span>
    </a>
  </div>
);

export const SidebarAboutSection = () => {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">About</h3>
      <p className="text-sm">
        Happy Commits curates social impact and civic tech open source projects that are looking for
        contributors and lists issues on thost projects that are tagged with Help Wanted or Good First Issue.
      </p>
      <ByLine />
    </div>
  );
};

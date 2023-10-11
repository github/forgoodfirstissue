import { Repository } from "../types";

type RepositoryDescriptionProps = {
  repositoryDescription: Repository["description"];
};

export const RepositoryDescription = ({ repositoryDescription }: RepositoryDescriptionProps) => {
  return (
    <p className="repo-item__desc">
      {repositoryDescription}{" "}
    </p>
  );
};

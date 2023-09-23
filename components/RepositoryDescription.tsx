import { Repository } from "../types";

type RepositoryDescriptionProps = {
  repositoryDescription: Repository["description"];
};

export const RepositoryDescription = ({ repositoryDescription }: RepositoryDescriptionProps) => {
  return (
    <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal mb-2">
      {repositoryDescription}{" "}
    </div>
  );
};

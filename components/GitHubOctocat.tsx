import Image from "next/image";

export const GitHubOctocat = () => {
  return (
    <div className="absolute z-10 right-80 top-60 hidden sm:block">
      <Image src="/octocatwithbody.svg" alt="First Issue" width={384} height={384} />
    </div>
  );
};

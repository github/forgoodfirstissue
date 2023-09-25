import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 bg-slate-700 text-center text-vanilla-100 py-3">
      Built with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      by the{" "}
      <Link
        href="https://socialimpact.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-violet-100 hover:underline"
      >
        Github Social Impact Team
      </Link>{" "}
      & designed by{" "}
      <Link
        href="https://github.com/designbygia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-violet-100 hover:underline"
      >
        @designbygia
      </Link>
    </footer>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-2">
      <div className="flex items-center flex-shrink-0 text-vanilla-100 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27 50.5c-1.5 0-3-.6-4.2-1.8L2.3 28.7c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0L27 38.5l16.2-18.3c2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5L31.2 48.7c-1.2 1.2-2.7 1.8-4.2 1.8z" />
        </svg>
        <span className="text-vanilla-100 text-xl">Happy Commits</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <a
            className=""
            href="https://github.com/rubyforgood/happycommits"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: 40,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 8,
              paddingBottom: 8,
              background: "#604FDD",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex"
            }}
          >
            <div style={{ color: "white", fontFamily: "Inter", fontWeight: "600" }}>
              Suggest a Project
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

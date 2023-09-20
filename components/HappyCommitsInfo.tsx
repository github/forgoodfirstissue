export const HappyCommitsInfo = () => {
  return (
    <div style={{ paddingLeft: "10%", paddingBottom: "3%" }}>
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
        <div className="flex items-center gap-2 py-2 px-4 w-[26.375rem] rounded-lg border border-[#dbdce2] bg-vanilla-100">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5 6.9999C11.5 7.59084 11.3836 8.17601 11.1574 8.72197C10.9313 9.26794 10.5998 9.76401 10.182 10.1819C9.76407 10.5997 9.268 10.9312 8.72203 11.1574C8.17607 11.3835 7.59091 11.4999 6.99996 11.4999C6.40901 11.4999 5.82385 11.3835 5.27788 11.1574C4.73192 10.9312 4.23584 10.5997 3.81798 10.1819C3.40011 9.76401 3.06865 9.26794 2.8425 8.72197C2.61635 8.17601 2.49996 7.59084 2.49996 6.9999C2.49996 5.80642 2.97406 4.66183 3.81798 3.81792C4.66189 2.974 5.80648 2.4999 6.99996 2.4999C8.19343 2.4999 9.33802 2.974 10.182 3.81792C11.0259 4.66183 11.5 5.80642 11.5 6.9999ZM10.68 11.7399C9.47434 12.6759 7.95733 13.1172 6.43776 12.974C4.91819 12.8309 3.5103 12.114 2.50071 10.9693C1.49111 9.82461 0.955713 8.33819 1.00349 6.81265C1.05128 5.2871 1.67866 3.8371 2.75791 2.75785C3.83717 1.6786 5.28716 1.05122 6.81271 1.00343C8.33826 0.955649 9.82467 1.49105 10.9694 2.50065C12.1141 3.51024 12.831 4.91813 12.9741 6.4377C13.1173 7.95726 12.676 9.47427 11.74 10.6799L14.78 13.7199C14.8537 13.7886 14.9128 13.8714 14.9538 13.9634C14.9948 14.0554 15.0168 14.1547 15.0186 14.2554C15.0204 14.3561 15.0018 14.4561 14.9641 14.5495C14.9264 14.6429 14.8702 14.7277 14.799 14.7989C14.7278 14.8702 14.643 14.9263 14.5496 14.964C14.4562 15.0017 14.3562 15.0203 14.2555 15.0185C14.1548 15.0167 14.0554 14.9947 13.9635 14.9537C13.8715 14.9127 13.7887 14.8536 13.72 14.7799L10.68 11.7399Z"
              fill="#604FDD"
            />
          </svg>
          <div className="search-1 text-[#24292f] font-['Inter'] leading-[150%]">Search Repositories</div>
        </div>
      </div>
    </div>
  );
};

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";

// Extend dayjs with relativeTime plugin at module scope
dayjs.extend(relativeTime);

export const useLastModified = (date: string) => {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLastModified(dayjs(date).fromNow());
  }, [date]);

  return lastModified;
};

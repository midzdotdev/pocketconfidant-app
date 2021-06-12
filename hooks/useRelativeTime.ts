import { DateTime } from "luxon";
import { useCallback, useState } from "react";
import useInterval from "./useInterval";

export const useRelativeTime = (
  timestamp?: number,
  interval: number = 1000
): string | null => {
  const getTimeString = useCallback(() => {
    if (!timestamp) {
      return null;
    }

    const dateTime = DateTime.fromMillis(timestamp);

    if (dateTime.diffNow().as("minutes") > -1) {
      return "just now";
    }

    return dateTime.toRelative()!;
  }, [timestamp]);

  const [value, setValue] = useState<string | null>(getTimeString());

  useInterval(() => {
    setValue(getTimeString());
  }, interval);

  return value;
};

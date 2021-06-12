import { DateTime } from "luxon";

export const relativeTime = (timestamp: number) => {
  return DateTime.fromMillis(timestamp).toRelative()!;
};

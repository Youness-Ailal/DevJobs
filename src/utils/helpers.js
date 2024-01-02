import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";

export function getTimeDifference(givenDate) {
  const now = new Date();
  const date = new Date(givenDate);
  const diffSec = differenceInSeconds(now, date);
  const diffWeeks = differenceInWeeks(now, date);
  const diffMin = differenceInMinutes(now, date);
  const diffHours = differenceInHours(now, date);
  const diffDays = differenceInDays(now, date);
  const diffMonths = differenceInMonths(now, date);
  const diffYears = differenceInYears(now, date);

  if (diffYears) return `${diffYears}y ago`;
  if (diffMonths) return `${diffMonths}mo ago`;
  if (diffWeeks) return `${diffWeeks}w ago`;
  if (diffDays) return `${diffDays}d ago`;
  if (diffHours) return `${diffHours}h ago`;
  if (diffMin) return `${diffMin}min ago`;
  if (diffSec) return `${diffSec}s ago`;
}

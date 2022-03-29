import { MatchStatus as TMatchStatus } from "../api/matchStatus/MatchStatus";

export const MATCHSTATUS_TITLE_FIELD = "id";

export const MatchStatusTitle = (record: TMatchStatus): string => {
  return record.id || record.id;
};

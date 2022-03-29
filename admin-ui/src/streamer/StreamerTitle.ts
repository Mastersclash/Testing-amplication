import { Streamer as TStreamer } from "../api/streamer/Streamer";

export const STREAMER_TITLE_FIELD = "tournament";

export const StreamerTitle = (record: TStreamer): string => {
  return record.tournament || record.id;
};

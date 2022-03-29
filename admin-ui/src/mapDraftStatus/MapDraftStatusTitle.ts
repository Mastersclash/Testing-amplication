import { MapDraftStatus as TMapDraftStatus } from "../api/mapDraftStatus/MapDraftStatus";

export const MAPDRAFTSTATUS_TITLE_FIELD = "id";

export const MapDraftStatusTitle = (record: TMapDraftStatus): string => {
  return record.id || record.id;
};

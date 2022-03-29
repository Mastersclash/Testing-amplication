import { MapDraft as TMapDraft } from "../api/mapDraft/MapDraft";

export const MAPDRAFT_TITLE_FIELD = "id";

export const MapDraftTitle = (record: TMapDraft): string => {
  return record.id || record.id;
};

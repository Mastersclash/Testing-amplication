import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "tournament";

export const AssetTitle = (record: TAsset): string => {
  return record.tournament || record.id;
};

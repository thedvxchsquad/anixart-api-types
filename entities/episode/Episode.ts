import { Release } from "../Release";
import { Source } from "./Source";

export interface Episode {
  addedDate: number;
  id: number;
  iframe: boolean;
  is_watched: boolean;
  name: string | null;
  playback_position: number;
  position: number;
  release: Release | null;
  releaseId: number;
  source: Source | null;
  sourceId: number;
  /**
   * @default ""
   */
  url: string;
}
import { Release } from "./Release";

export interface ReleaseStreamingPlatform {
  id: number;
  release: Release;
  /**
   * @default ""
   */
  name: string;
  /**
   * @default ""
   */
  icon: string | null;
  /**
   * @default ""
   */
  url: string;
}
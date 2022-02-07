import { Profile } from "./Profile";
import { Release } from "./Release";

export interface Collection {
  comment_count: number;
  creation_date: number;
  creator: Profile | null;
  favorites_count: number;

  id: number;

  is_deleted: boolean;
  is_favorite: boolean;
  is_private: boolean;
  last_update_date: number;
  
  /**
   * @default ""
   */
  title: string;
  /**
   * @default ""
   */
  description: string;
  /**
   * @default ""
   */
  image: string;
  /**
   * @default []
   */
  releases: Release;
}
import { Profile } from "./Profile";
import { Release } from "./Release";

export interface CommentWeek {
  id: number;
  is_edited: boolean;
  is_spoiler: boolean;
  /**
   * @default ""
   */
  message: string;
  profile: Profile;
  release: Release;
  timestamp: number;
  vote_count: number;
}
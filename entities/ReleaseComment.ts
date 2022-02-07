import { Profile } from "./Profile";
import { Release } from "./Release";

enum Votes {
  NONE, MINUS, PLUS
}

export interface ReleaseComment {
  id: number;
  is_deleted: boolean;
  is_edited: boolean;
  is_spoiler: boolean;
  message: string;
  /**
   * @default 0
   */
  parent_comment_id: number | null;
  profile: Profile;
  release: Release;
  reply_count: number;
  timestamp: number;
  vote: number;
  vote_count: number;
}
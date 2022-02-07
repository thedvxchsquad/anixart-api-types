import { Collection } from "./Collection";
import { Profile } from "./Profile"

export enum Votes {
  NONE, MINUS, PLUS
}

export interface CollectionComment {
  collection: Collection;

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
  reply_count: number;
  timestamp: number;
  vote: number;
  vote_count: number;
}
import { Category } from "./Category";
import { ReleaseComment } from "./ReleaseComment";
import { ReleaseStatus } from "./ReleaseStatus";
import { Episode } from "./episode/Episode";
import { EpisodeUpdate } from "./EpisodeUpdate";
import { Related } from "./Related";

export interface Release {
  age_rating: number;
  aired_on_date: number;
  author: string | null;
  broadcast: number;
  category: Category | null;
  comment_count: number;
  comment_per_day_count: number;
  /**
   * @default []
   */
  comments: ReleaseComment;
  completed_count: number;
  country: string | null;
  description: string | null;
  director: string | null;
  dropped_count: number;
  duration: number;
  episode_last_update: EpisodeUpdate | null;
  episodes_total: number | null;
  favorites_count: number;
  genres: string | null;
  grade: number;
  hold_on_count: number;

  id: number;
  is_adult: boolean;
  is_deleted: boolean;
  is_favorite: boolean;
  is_play_disabled: boolean;
  is_ru_blocked: boolean;
  is_tpp_disabled: boolean; // third party platforms
  is_view_blocked: boolean;
  is_viewed: boolean;
  lastSetCompletedDate: number;
  lastSetDroppedDate: number;
  lastSetFavoriteDate: number;
  lastSetHoldOnDate: number;
  lastSetPlanDate: number;
  lastSetViewedDate: number;
  lastSetWatchingDate: number;
  
  last_view_episode: Episode | null;
  last_view_timestamp: number;
  note: string | null;
  plan_count: number;
  poster: string | null;
  profile_list_status: number;
  rating: number;
  /**
   * @default []
   */
  recommended_releases: Release;
  related: Related | null;
  related_count: number;
  /**
   * @default []
   */
  related_releases: Release;
  release_date: string | null;
  /**
   * @default []
   */
  screenshots: string[];
  season: number;
  status: ReleaseStatus | null;
  status_id: number;
  studio: string | null;
  title_original: string | null;
  title_ru: string | null;
  translators: string | null;
  vote_1_count: number;
  vote_2_count: number;
  vote_3_count: number;
  vote_4_count: number;
  vote_5_count: number;
  vote_count: number;
  voted_at: number;
  watching_count: number;
  year: string | null;
  /**
   * @default ""
   */
  title_alt: string | null;
  /**
   * @default 0
   */
  episodes_released: number;
  /**
   * @default 0
   */
  creation_date: number;
  /**
   * @default 0
   */
  last_update_date: number;
  /**
   * @default 0
   */
  your_vote: number;
  /**
   * @default 0
   */
  my_vote: number;
}
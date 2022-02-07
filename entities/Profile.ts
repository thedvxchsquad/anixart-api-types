import { ProfileToken } from "./ProfileToken";
import { ProfileWatchDynamics } from "./ProfileWatchDynamics";
import { Release } from "./Release";
import { Role } from "./Role";

interface APIProfileInterface {}

class Profile {
  public static ADMINISTRATOR = 4;
  public static DEVELOPER = 5;
  public static MEMBER = 1;
  public static MODERATOR = 3;
  public static NONE = 0;
  public static RELEASER = 2;

  public ban_expires: number;
  public ban_reason: string | null;
  public added_date: number; // blockListAddedDate
  public collection_count: number;
  public comment_count: number;
  public completed_count: number;
  public dropped_count: number;
  public favorite_count: number;
  public friend_count: number;
  public friend_status: number | null;
  public history: Release[];
  public hold_on_count: number;

  public id: number;
  public is_banned: boolean;
  public is_blocked: boolean;
  public is_comment_notifications_enabled: boolean;
  public is_counts_hidden: boolean;
  public is_episode_notifications_enabled: boolean;
  public is_first_episode_notification_enabled: boolean;
  public is_friend_requests_disallowed: boolean;
  public is_google_bound: boolean;
  public is_login_changed: boolean;
  public is_me_blocked: boolean;
  public is_online: boolean;
  public is_perm_banned: boolean;
  public is_social: boolean;
  public is_social_hidden: boolean;
  public is_sponsor: boolean;
  public is_stats_hidden: boolean;
  public is_verified: boolean;
  public is_vk_bound: boolean;
  public last_activity_time: number;
  public plan_count: number;
  public privilege_level: number;
  public profileToken: ProfileToken;
  public rating_score: number;
  public register_date: number;
  public sponsorshipExpires: number;
  public vote: number;
  public votes: Release[];
  public watching_count: number;
  public login = "";
  public password = "";
  public avatar = "";
  public status = "";
  public vk_page = "";
  public tg_page = "";
  public inst_page = "";
  public tt_page = "";
  public watch_dynamics: ProfileWatchDynamics[] = [];

  public roles: Role[] = [];

  setProfile(raw: any) {
    Object.assign(this, raw);
  }
}

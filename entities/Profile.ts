import { JsonProperties, JsonProperty } from "../utils/json";
import { ProfileToken } from "./ProfileToken";
import { ProfileWatchDynamics } from "./ProfileWatchDynamics";
import { Release } from "./Release";
import { Role } from "./Role";

interface APIProfileInterface {}

@JsonProperties()
class Profile {
  public static ADMINISTRATOR = 4;
  public static DEVELOPER = 5;
  public static MEMBER = 1;
  public static MODERATOR = 3;
  public static NONE = 0;
  public static RELEASER = 2;

  @JsonProperty("ban_expires")
  public banExpires: number;
  @JsonProperty("ban_reason")
  public banReason: string | null;
  @JsonProperty("added_date")
  public blockListAddedDate: number;
  @JsonProperty("collection_count")
  public collectionCount: number;
  @JsonProperty("comment_count")
  public commentCount: number;
  @JsonProperty("completed_count")
  public completedCount: number;
  @JsonProperty("dropped_count")
  public droppedCount: number;
  @JsonProperty("favorite_count")
  public favoriteCount: number;
  @JsonProperty("friend_count")
  public friendCount: number;
  @JsonProperty("friend_status")
  public friendStatus: number | null;
  public history: Release[];
  @JsonProperty("hold_on_count")
  public holdOnCount: number;

  public id: number;
  @JsonProperty("is_banned")
  public isBanned: boolean;
  @JsonProperty("is_blocked")
  public isBlocked: boolean;
  @JsonProperty("is_comment_notifications_enabled")
  public isCommentNotificationsEnabled: boolean;
  @JsonProperty("is_counts_hidden")
  public isCountsHidden: boolean;
  @JsonProperty("is_episode_notifications_enabled")
  public isEpisodeNotificationsEnabled: boolean;
  @JsonProperty("is_first_episode_notification_enabled")
  public isFirstEpisodeNotificationEnabled: boolean;
  @JsonProperty("is_friend_requests_disallowed")
  public isFriendRequestsDisallowed: boolean;
  @JsonProperty("is_google_bound")
  public isGoogleBound: boolean;
  @JsonProperty("is_login_changed")
  public isLoginChanged: boolean;
  @JsonProperty("is_me_blocked")
  public isMeBlocked: boolean;
  @JsonProperty("is_online")
  public isOnline: boolean;
  @JsonProperty("is_perm_banned")
  public isPermBanned: boolean;
  @JsonProperty("is_social")
  public isSocial: boolean;
  @JsonProperty("is_social_hidden")
  public isSocialHidden: boolean;
  @JsonProperty("is_sponsor")
  public isSponsor: boolean;
  @JsonProperty("is_stats_hidden")
  public isStatsHidden: boolean;
  @JsonProperty("is_verified")
  public isVerified: boolean;
  @JsonProperty("is_vk_bound")
  public isVkBound: boolean;
  @JsonProperty("last_activity_time")
  public lastActivityTime: number;
  @JsonProperty("plan_count")
  public planCount: number;
  @JsonProperty("privilege_level")
  public privilegeLevel: number;
  public profileToken: ProfileToken;
  @JsonProperty("rating_score")
  public ratingScore: number;
  @JsonProperty("register_date")
  public registerDate: number;
  public sponsorshipExpires: number;
  public vote: number;
  public votes: Release[];
  @JsonProperty("watching_count")
  public watchingCount: number;
  public login = "";
  public password = "";
  public avatar = "";
  public status = "";
  @JsonProperty("vk_page")
  public vkPage = "";
  @JsonProperty("tg_page")
  public tgPage = "";
  @JsonProperty("inst_page")
  public instPage = "";
  @JsonProperty("tt_page")
  public ttPage = "";
  @JsonProperty("watch_dynamics")
  public watchDynamics: ProfileWatchDynamics[] = [];
  @JsonProperty("roles")
  public roles: Role[] = [];

  setProfile(raw: any) {
    Object.assign(this, raw);
  }
}

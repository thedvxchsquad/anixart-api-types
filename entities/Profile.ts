import { JsonProperties, JsonProperty } from "../utils/json";
import { ProfileToken } from "./ProfileToken";
import { ProfileWatchDynamics } from "./ProfileWatchDynamics";
import { Release } from "./Release";
import { Role } from "./Role";

@JsonProperties()
class Profile {
    public static ADMINISTRATOR = 4;
    public static DEVELOPER = 5;
    public static MEMBER = 1;
    public static MODERATOR = 3;
    public static NONE = 0;
    public static RELEASER = 2;
    
    @JsonProperty("ban_expires")
    private banExpires: number;
    @JsonProperty("ban_reason")
    private banReason: string | null;
    @JsonProperty("added_date")
    private blockListAddedDate: number;
    @JsonProperty("collection_count")
    private collectionCount: number;
    @JsonProperty("comment_count")
    private commentCount: number;
    @JsonProperty("completed_count")
    private completedCount: number;
    @JsonProperty("dropped_count")
    private droppedCount: number;
    @JsonProperty("favorite_count")
    private favoriteCount: number;
    @JsonProperty("friend_count")
    private friendCount: number;
    @JsonProperty("friend_status")
    private friendStatus: number | null;
    private history: Release[];
    @JsonProperty("hold_on_count")
    private holdOnCount: number;

    private id: number;
    @JsonProperty("is_banned")
    private isBanned: boolean;
    @JsonProperty("is_blocked")
    private isBlocked: boolean;
    @JsonProperty("is_comment_notifications_enabled")
    private isCommentNotificationsEnabled: boolean;
    @JsonProperty("is_counts_hidden")
    private isCountsHidden: boolean;
    @JsonProperty("is_episode_notifications_enabled")
    private isEpisodeNotificationsEnabled: boolean;
    @JsonProperty("is_first_episode_notification_enabled")
    private isFirstEpisodeNotificationEnabled: boolean;
    @JsonProperty("is_friend_requests_disallowed")
    private isFriendRequestsDisallowed: boolean;
    @JsonProperty("is_google_bound")
    private isGoogleBound: boolean;
    @JsonProperty("is_login_changed")
    private isLoginChanged: boolean;
    @JsonProperty("is_me_blocked")
    private isMeBlocked: boolean;
    @JsonProperty("is_online")
    private isOnline: boolean;
    @JsonProperty("is_perm_banned")
    private isPermBanned: boolean;
    @JsonProperty("is_social")
    private isSocial: boolean;
    @JsonProperty("is_social_hidden")
    private isSocialHidden: boolean;
    @JsonProperty("is_sponsor")
    private isSponsor: boolean;
    @JsonProperty("is_stats_hidden")
    private isStatsHidden: boolean;
    @JsonProperty("is_verified")
    private isVerified: boolean;
    @JsonProperty("is_vk_bound")
    private isVkBound: boolean;
    @JsonProperty("last_activity_time")
    private lastActivityTime: number;
    @JsonProperty("plan_count")
    private planCount: number;
    @JsonProperty("privilege_level")
    private privilegeLevel: number;
    public profileToken: ProfileToken;
    @JsonProperty("rating_score")
    private ratingScore: number;
    @JsonProperty("register_date")
    private registerDate: number;
    private sponsorshipExpires: number;
    private vote: number;
    private votes: Release[];
    @JsonProperty("watching_count")
    private watchingCount: number;
    private login = "";
    private password = "";
    private  avatar = "";
    private  status = "";
    @JsonProperty("vk_page")
    private  vkPage = "";
    @JsonProperty("tg_page")
    private  tgPage = "";
    @JsonProperty("inst_page")
    private  instPage = "";
    @JsonProperty("tt_page")
    private  ttPage = "";
    @JsonProperty("watch_dynamics")
    private watchDynamics: ProfileWatchDynamics[] = [];
    @JsonProperty("roles")
    private roles: Role[] = [];
}
import { ProfileToken } from "./ProfileToken";
import { ProfileWatchDynamics } from "./ProfileWatchDynamics";
import { Release } from "./Release";
import { Role } from "./Role";

export class Profile {

    public static ADMINISTRATOR = 4
    public static DEVELOPER = 5;
    public static MEMBER = 1;
    public static MODERATOR = 3;
    public static NONE = 0;
    public static RELEASER = 2;
    
    id: number;
    
    ban_expires: number;
    ban_reason: string | null;
    added_date: number;
    collection_count: number;
    comment_count: number;
    completed_count: number;
    
    dropped_count: number;
    favorite_count: number;
    friend_count: number;
    friend_status: number | null;
    hold_on_count: number;

    history: Release[]

    is_banned: boolean;
    is_blocked: boolean;
    is_comment_notifications_enabled: boolean;
    is_counts_hidden: boolean;
    is_episode_notifications_enabled: boolean;
    is_first_episode_notification_enabled: boolean;
    is_friend_requests_disallowed: boolean;
    is_google_bound: boolean;
    is_login_changed: boolean;
    is_me_blocked: boolean;
    is_online: boolean;
    is_perm_banned: boolean;
    is_social: boolean;
    
    is_social_hidden: boolean;
    is_sponsor: boolean;
    is_stats_hidden: boolean;
    is_verified: boolean;
    is_vk_bound: boolean;

    last_activity_time: number;
    plan_count: number;
    privilege_level: number;
    profileToken: ProfileToken;
    rating_score: number;
    register_date: number;
    sponsorshipExpires: number;
    vote: number;
    votes: Release[];
    watchingCount: number;
    

    login: string = "";
    password: string = "";
    avatar: string = "";
    status: string = "";
    vk_page: string = "";
    tg_page: string = "";
    inst_page: string = "";
    tt_page: string = "";

    watch_dynamics: ProfileWatchDynamics[] = [];
    roles: Role[] = [];

}
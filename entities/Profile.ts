import { Release } from "./Release" 

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

}
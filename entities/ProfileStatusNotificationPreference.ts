export enum Status {
  FAVORITE_STATUS, STATUS_WATCHING, STATUS_PLAN, 
  STATUS_COMPLETED, STATUS_HOLD_ON, STATUS_DROPPED
}

export interface ProfileStatusNotificationPreference {
  status: Status;
}
export interface EpisodeUpdate {
  last_episode_source_update_id: number;
  last_episode_type_update_id: number;
  last_episode_update_date: number;
  /**
   * @default ""
   */
  last_episode_update_name: string | null;
  /**
   * @default ""
   */
  last_episode_source_update_name: string;
  /**
   * @default ""
   */
  lastEpisodeTypeUpdateName: string; 
}
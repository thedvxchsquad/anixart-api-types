export interface CustomFilter {
  id: number;
  selected_age_ratings: string[];
  selected_genres: string[];
  /**
   * @default ""
   */
  selected_category: string;
  /**
   * @default ""
   */
  selected_status: string;
  /**
   * @default ""
   */
  selected_year: string;
  /**
   * @default ""
   */
  selected_studio: string;
  /**
   * @default ""
   */
  selected_episodes: string;
  /**
   * @default ""
   */
  selected_sort: string;
  /**
   * @default ""
   */
  selected_country: string;
  /**
   * @default ""
   */
  selected_season: string;
  /**
   * @default ""
   */
  selected_episode_duration: string;
}
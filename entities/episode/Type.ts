export interface Type {
  episodes_count: number;
  id: number;
  view_count: number;
  /**
   * @default ""
   */
  name: string;
  /**
   * @default ""
   */
  workers: string | null;
}
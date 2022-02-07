export interface Interesting {
  id: number;
  is_hidden: boolean;
  type: number;
  /**
   * @default ""
   */
  title: string;
  /**
   * @default ""
   */
  description: string;
  /**
   * @default ""
   */
  image: string;
  /**
   * @default ""
   */
  action: string;
}
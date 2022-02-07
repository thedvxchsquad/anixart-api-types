const TYPE_COLLECTION = "TYPE_COLLECTION";
const TYPE_PROFILE = "TYPE_PROFILE";
const TYPE_RELEASE = "TYPE_RELEASE";

export interface Search {
  id: number;
  tsLastRequest: number;
  /**
   * @default ""
   */
  type: string;
  /**
   * @default ""
   */
  query: string;
}
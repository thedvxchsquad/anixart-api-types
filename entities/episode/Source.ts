import { Type } from "./Type";

export interface Source {
  episodes_count: number;
  id: number;
  /**
   * @default ""
   */
  name: string;
  type: Type;
}
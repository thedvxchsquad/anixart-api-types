import { Genre } from "./Genre";
import { Release } from "./Release";

export interface ReleaseGenre {
  genre: Genre | null;
  release: Release | null;
}
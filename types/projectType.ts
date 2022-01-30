import { CategoryType } from "./categoryType";
import { CoverPhotoType } from "./coverPhotoType";

export type ProjectType = {
  slug: string;
  title: string;
  body?: string;
  isFeatured?: string;
  tags?: string;
  updatedAt?: string;
  createdAt?: string;
  category?: CategoryType;
  coverPhoto: CoverPhotoType;
};

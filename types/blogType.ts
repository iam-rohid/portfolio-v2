import { CategoryType } from "./categoryType";

export type BlogType = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  isFeatured?: string;
  tags?: string;
  updatedAt: string;
  createdAt: string;
  category?: CategoryType;
};

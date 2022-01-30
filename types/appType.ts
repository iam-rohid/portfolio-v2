import { CoverPhotoType } from "./coverPhotoType";

export type AppType = {
  id: string;
  href: string;
  targetBlank?: boolean;
  title: string;
  description: string;
  coverImage: CoverPhotoType;
};

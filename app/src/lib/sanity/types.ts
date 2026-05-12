import { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  titleEn?: string;
  slug: { current: string };
  icon?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: SanityImage;
  specialization?: string;
  bio?: PortableTextBlock[];
}

export interface Post {
  _id: string;
  title: string;
  titleEn?: string;
  slug: { current: string };
  excerpt?: string;
  excerptEn?: string;
  mainImage?: SanityImage;
  author?: Author;
  categories?: Category[];
  publishedAt?: string;
  body?: PortableTextBlock[];
  readTime?: number;
  featured?: boolean;
}

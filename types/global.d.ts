declare type Post = {
  slug: string;
  title: string;
  excerpt: string;
  media?: {
    wixMedia?: {
      image?: string;
    };
    displayed?: boolean;
    custom?: boolean;
  };
  categoryIds: string[];
  lastPublishedDate: Date;
  minutesToRead: number;
  author?: string;
};

declare type Category = {
  label?: string;
  slug?: string;
  _id?: string;
  postCount?: number;
};

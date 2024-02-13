export type Post = {
  _id: string;
  title: string;
  desc: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt: string;
};

export type User = {
  _id: string;
  username: string;
  email: string;
  img?: string;
  password: string;
  isAdmin: boolean;
};

export type CreatePostInitialState = {
  errors?: {
    title?: string[];
    slug?: string[];
    img?: string[];
    desc?: string[];
  };
  message?: string | null;
};

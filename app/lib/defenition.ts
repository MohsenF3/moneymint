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
  id: string;
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

export type NavLinkProps = {
  id?: number;
  name: string;
  path: string;
  handleMenue: () => void;
};

export type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
};

export type RegisterFormState = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
    confirmpassword?: string[];
  };
  message?: string | null;
};

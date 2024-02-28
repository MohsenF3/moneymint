import { IconType } from "react-icons";

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
  lang: string;
  path: string;
  handleMenu: () => void;
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

export type CustomInputProps = {
  type: string;
  info: string;
  holder: string;
  errors?: string[] | undefined;
};

// about page
export type InfoItem = {
  title: string;
  description: string;
};

export type InfoCardData = InfoItem & {
  icon: IconType;
  id: number;
};

export type InfoCardsProps = {
  item1: InfoItem;
  item2: InfoItem;
  item3: InfoItem;
};

// about page
export type ContactSectionProps = {
  title: string;
  form: ContactFormProps;
};

export type ContactFormProps = {
  name: string;
  email: string;
  number: string;
  message: string;
  button: string;
};
//

export type LoginFormProps = {
  username: string;
  password: string;
  button: string;
  title: string;
  registerlink: string;
};
export type RegisterFormProps = {
  username: string;
  password: string;
  email: string;
  confirmpassword: string;
  button: string;
  title: string;
  loginlink: string;
};

export type NavigationType = {
  home: string;
  about: string;
  contact: string;
  blog: string;
  admin: string;
  login: string;
  logout: string;
};

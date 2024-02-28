import { FaGithub, FaGoogle } from "react-icons/fa";

type SocialLoginBtnsProps = {
  name: string;
  icon: string;
  serverAction: () => void;
};

export default function SocialLoginBtns({
  name,
  serverAction,
  icon,
}: SocialLoginBtnsProps) {
  return (
    <form className="flex-1" action={serverAction}>
      <button className="btn w-full">
        {icon === "FaGithub" ? <FaGithub size={20} /> : <FaGoogle size={20} />}
        <span>{name}</span>
      </button>
    </form>
  );
}

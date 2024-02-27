import { handleLogout } from "@/app/lib/actions";
import { IconType } from "react-icons";

export function LogoutBtn({ logout }: { logout: string }) {
  return (
    <form action={handleLogout}>
      <button className="btn btn-error text-white  ml-5 hover:scale-95 transition">
        {logout}
      </button>
    </form>
  );
}

export function ToggleSidebarBtn({
  Icon,
  style,
  handleMenu,
}: {
  Icon: IconType;
  style?: string;
  handleMenu: () => void;
}) {
  return (
    <button
      className={`btn text-white light-white  lg:hidden ${style}`}
      onClick={handleMenu}
    >
      <Icon size={30} />
    </button>
  );
}

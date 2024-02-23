import { IconType } from "react-icons";

interface IInfoCardProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function InfoCard({ title, desc, Icon }: IInfoCardProps) {
  return (
    <div className="w-full h-80 flex flex-col justify-around items-center p-8 bg-neutral rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 w-20 h-20 flex text-white items-center justify-center text-3xl bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
      </div>
      <p className="text-sm sm:text-base ">{desc}</p>
    </div>
  );
}

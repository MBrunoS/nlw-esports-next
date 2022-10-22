import React from "react";
import Link from "next/link";
import Image from "next/image";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  id: string;
}

export const GameBanner: React.FC<GameBannerProps> = (props) => {
  return (
    <Link
      href={`/game/${props.id}`}
      className="relative rounded-lg overflow-hidden"
    >
      <Image src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
        <strong className="text-white font-bold block">{props.title}</strong>
        <span className="text-zinc-300 text-sm">{props.adsCount} anúncios</span>
      </div>
    </Link>
  );
};

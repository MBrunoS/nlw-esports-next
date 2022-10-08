import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateAdBanner from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { GameBanner } from "../components/GameBanner";
import logoImg from "../assets/logo-nlw-esports.svg";
import { Toaster } from "react-hot-toast";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

const Home: NextPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3000/api/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  return (
    <>
      <Head>
        <title>NLW eSports</title>
        <meta name="description" content="Encontre um parceiro pra jogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1344px] px-2 mx-auto flex flex-col items-center my-20">
        <Image src={logoImg} alt="NLW eSports" />

        <h1 className="text-4xl sm:text-6xl text-white font-black my-20 text-center">
          Seu{" "}
          <span className="bg-nlw-gradient text-transparent bg-clip-text">
            duo
          </span>{" "}
          está aqui.
        </h1>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {games.map((game) => (
            <GameBanner
              title={game.title}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
              key={game.id}
            />
          ))}
        </div>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>

      <Toaster />
    </>
  );
};

export default Home;

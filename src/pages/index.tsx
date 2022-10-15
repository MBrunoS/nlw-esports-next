import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import type { GetServerSideProps, NextPage } from "next";
import CreateAdBanner from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { GameBanner } from "../components/GameBanner";

import Layout from "../components/Layout";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface HomePageProps {
  games: Game[];
}

const HomePage: NextPage<HomePageProps> = ({ games }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>NLW eSports</title>
        <meta name="description" content="Encontre um parceiro pra jogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
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
              id={game.id}
            />
          ))}
        </div>

        <Dialog.Root open={isModalOpen}>
          <CreateAdBanner onOpen={() => setIsModalOpen(true)} />
          <CreateAdModal games={games} onClose={() => setIsModalOpen(false)} />
        </Dialog.Root>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios("http://localhost:3000/api/games");

  return {
    props: {
      games: data,
    },
  };
};

export default HomePage;

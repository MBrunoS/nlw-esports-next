import Head from "next/head";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import CreateAdBanner from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { GameBanner } from "../components/GameBanner";
import { api } from "../services/api";
import Layout from "../components/Layout";
import LoginPage from "./login";

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
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <Head>
        <title>NLW eSports</title>
        <meta name="description" content="Encontre um parceiro pra jogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="text-white font-black my-20 text-center">
          <p className="text-xl sm:text-2xl mb-4">
            Bem-vindo, {session.user?.name}!
          </p>
          <h1 className="text-4xl sm:text-6xl">Encontre um parceiro</h1>
        </div>

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
  const { data } = await api.get("/api/games");

  return {
    props: {
      games: data,
    },
  };
};

export default HomePage;

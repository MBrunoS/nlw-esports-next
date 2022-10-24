import { Game } from "@prisma/client";
import { Breadcrumb } from "flowbite-react";
import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { House } from "phosphor-react";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import Layout from "../../components/Layout";
import { api } from "../../services/api";
import LoginPage from "../login";

interface GamePageProps {
  game: Game;
  duos: DuoCardProps[];
}

const GamePage: NextPage<GamePageProps> = ({ duos, game }) => {
  const { data: session } = useSession();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <Head>
        <title>NLW eSports - {game.title}</title>
        <meta name="description" content="Encontre um parceiro pra jogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-white font-black my-20 text-center text-xl sm:text-2xl">
          {game.title}
        </h1>

        {duos.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 ">
            {duos.map((item) => (
              <DuoCard data={item} key={item.id} />
            ))}
          </div>
        ) : (
          <p className="text-white">
            Não há anúncios cadastrados para este jogo
          </p>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data: game } = await api.get(`/api/games/${params?.id}`);
  const { data: duos } = await api.get(`/api/games/${params?.id}/ads`);

  return {
    props: {
      game,
      duos,
    },
  };
};

export default GamePage;

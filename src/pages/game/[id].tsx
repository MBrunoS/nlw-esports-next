import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import Layout from "../../components/Layout";
import { api } from "../../services/api";

interface GamePageProps {
  duos: DuoCardProps[];
}

const GamePage: NextPage<GamePageProps> = ({ duos }) => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 my-20">
        {duos.map((item) => (
          <DuoCard data={item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get(`/api/games/${params?.id}/ads`);

  return {
    props: {
      duos: data,
    },
  };
};

export default GamePage;

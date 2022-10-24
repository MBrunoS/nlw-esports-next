import Head from "next/head";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import { DiscordLogo } from "phosphor-react";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NLW eSports</title>
        <meta name="description" content="Encontre um parceiro pra jogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="text-white font-black my-20 text-center">
          <h1 className="text-4xl sm:text-6xl">
            Seu{" "}
            <span className="bg-nlw-gradient text-transparent bg-clip-text">
              duo
            </span>{" "}
            está aqui.
          </h1>
        </div>
        <Button
          onClick={() => signIn("discord")}
          icon={<DiscordLogo size={24} />}
          className="text-white"
        >
          Fazer login com Discord
        </Button>
      </Layout>
    </>
  );
};

export default LoginPage;

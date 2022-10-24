import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import logoImg from "../../assets/logo-nlw-esports.svg";
import { Toaster } from "react-hot-toast";
import { Image } from "../Image";
import { UserDropdown } from "../UserDropdown";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="max-w-[1344px] px-2 mx-auto flex flex-col items-center my-20">
      {session && (
        <div className="flex ml-auto text-white">
          <UserDropdown userImg={session.user.image as string} />
        </div>
      )}

      <Link href="/">
        <a className="w-1/2 md:w-1/5">
          <Image src={logoImg} alt="NLW eSports" />
        </a>
      </Link>

      {children}
      <Toaster />
    </div>
  );
};

export default Layout;

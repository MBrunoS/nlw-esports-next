import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo-nlw-esports.svg";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1344px] px-2 mx-auto flex flex-col items-center my-20">
      <Link href="/">
        <Image src={logoImg} alt="NLW eSports" />
      </Link>

      {children}
      <Toaster />
    </div>
  );
};

export default Layout;

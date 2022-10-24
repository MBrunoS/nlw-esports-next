import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { signOut } from "next-auth/react";
import { SignOut } from "phosphor-react";

interface Props {
  userImg: string;
}

export const UserDropdown: React.FC<Props> = ({ userImg }) => {
  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={userImg} rounded={true} />}
    >
      <Dropdown.Item onClick={() => signOut()} icon={SignOut}>
        Sair
      </Dropdown.Item>
    </Dropdown>
  );
};

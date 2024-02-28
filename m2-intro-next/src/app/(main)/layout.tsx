import { FC, PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>HEADER MAIN</div>
      <main>{children}</main>
      <div>FOOTER MAIN</div>
    </>
  );
};

export default UsersLayout;

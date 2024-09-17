import { ReactNode } from 'react';

type MainLayoutProps = {
  top: ReactNode;
  children: ReactNode;
};

const MainLayout = ({ top, children }: MainLayoutProps) => {
  return (
    <>
      <div>{top}</div>
      <section>{children}</section>
    </>
  );
};

export default MainLayout;

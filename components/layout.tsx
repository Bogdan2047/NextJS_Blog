import Footer from "./footer";
import Header from "./header";
import { Providers } from "../rtk/provider";
import "../lib/firebase";
import { FC, ReactNode } from "react";
import { LayoutProps } from "antd";

type layoutProps = {
  children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Providers>
        <div style={{ display: "flex" }}>
          <Header />
          {children}
        </div>
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;

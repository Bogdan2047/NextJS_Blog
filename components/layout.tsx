import Footer from "./footer";
import Header from "./header";
import { Providers } from "../rtk/provider";
import "../lib/firebase";
import { FC, ReactNode } from "react";
import { LayoutProps } from "antd";
import {CookiesProvider} from "react-cookie"

type layoutProps = {
  children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <CookiesProvider>
      <Providers>
        <div style={{ display: "flex" }}>
          <Header />
          {children}
        </div>
        <Footer />
      </Providers>
      </CookiesProvider>
    </>
  );
};

export default Layout;

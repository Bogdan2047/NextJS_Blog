import Footer from "./footer";
import Header from "./header";
import { Providers } from "../rtk/provider";
import "../lib/firebase";

const Layout = ({ children }) => {
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

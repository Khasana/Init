import { PropsWithChildren } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  title?: string;
  transparent?: boolean;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div className="content">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

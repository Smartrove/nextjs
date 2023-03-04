import Footer from "./footer";
import Header from "./header";
import styles from "../styles/Header.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

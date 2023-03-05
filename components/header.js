import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.navbarcontainer}>
      <Link href="/">
        <Image src="/smartrove.jpg" width={100} height={100} />
      </Link>
      <nav className={styles.navcontainer}>
        <ul className={styles.navlist}>
          <li className={styles.navlink}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

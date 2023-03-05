import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" type="image/x-icon" href="/smartrove.jpg"></link>
      </Head>
      <div className={styles.container}>
        <h1>Our Services</h1>
      </div>
    </>
  );
};

export default Services;

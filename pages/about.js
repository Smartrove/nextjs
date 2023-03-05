import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" type="image/x-icon" href="/smartrove.jpg"></link>
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  );
};

export default About;

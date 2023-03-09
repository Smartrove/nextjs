import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  //fetch data
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  console.log(response);
  const responseData = await response.json();

  return {
    props: { apiData: responseData },
  };
};

export default function Home({ apiData }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" type="image/x-icon" href="/smartrove.jpg"></link>
      </Head>
      <div className="container">
        <div className="card">
          <div className="card-container">
            {apiData &&
              apiData.map((item) => (
                <Link
                  legacyBehavior
                  href={`/route/${item.id}`}
                  key={item.id}
                  className="contact-items"
                >
                  <a className="card bg-light p-3 m-2 border-0 text-decoration-none text-dark">
                    <h4>Name: {item.name}</h4>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export const getStaticProps = async () => {
  //fetch data
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

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
        <div class="card">
          <div class="card-container">
            {apiData &&
              apiData.map((item) => (
                <div key={item.id} className="contact-items">
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

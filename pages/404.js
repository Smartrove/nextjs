import Link from "next/link";
const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops.......</h1>
      <p>page not found</p>
      <p>
        Go back to Homepage <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;

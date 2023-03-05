import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  // to redirect from a not found page
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  // redirecting ends here
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

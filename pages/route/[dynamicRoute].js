export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${dynamicRoute}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);

  //to map every path
  const paths = data.map((path) => {
    return {
      params: { id: path.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const resData = await response.json();

  return {
    props: { path: data },
  };
};

const dynamicRoute = ({ path }) => {
  return (
    <>
      <div className="text-center">
        <h5>{path.name}</h5>
        <h5>{path.email}</h5>
        <h5>{path.website}</h5>
        <h5>{path.address.city}</h5>
      </div>
    </>
  );
};

export default dynamicRoute;

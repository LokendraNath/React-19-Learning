import { useGetProductIDseQuery } from "../App/Service/productApi";

const SpecificProducts = () => {
  const { data, isError, isLoading } = useGetProductIDseQuery(20);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error aaya...</p>;

  return (
    <div>
      <h1>{data?.brand}</h1>
      <h2>{data?.category}</h2>
      <p>{data?.description}</p>
    </div>
  );
};
export default SpecificProducts;

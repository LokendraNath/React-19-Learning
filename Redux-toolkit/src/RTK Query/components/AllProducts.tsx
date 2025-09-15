import { useGetAllProductsQuery } from "../App/Service/productApi";

function AllProducts() {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error aaya...</p>;

  return (
    <div>
      <h1>All Products</h1>
      {data?.products.map((p: any) => (
        <>
          <h3 key={p.id}>{p.title}</h3>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
}

export default AllProducts;

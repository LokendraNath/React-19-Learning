import { useDeleteProductMutation } from "../App/Service/productApi";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error aaya...</p>;

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error Deleting Product", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfull Delete` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};
export default DeleteProduct;

import { useUpdateProductMutation } from "../App/Service/productApi";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isLoading }] = useUpdateProductMutation();

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated 🤝",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;

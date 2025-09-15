import { useAddNewProductMutation } from "../App/Service/productApi";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error aaya...</p>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 699,
        title: "Apple iPhone 69 Ultra Supream Super Max",
        description:
          "Backchodi ka dusra name Apple iPhone, This Phone have FuckUp feature improve 0.99 bug previus iPhone 68, And We Deside to launch new phone for This BIGGGGGG problem",
      };
      addNewProduct(newProductData);
    } catch (err) {
      console.error("Error Adding new proudct", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h2>{data?.title}</h2>
      <h3>{data?.description}</h3>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};
export default AddNewProduct;

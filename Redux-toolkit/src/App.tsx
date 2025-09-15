// import Counter from "./Simple Counter/components/Counter";

// import AddNewProduct from "./RTK Query/components/AddNewProduct";
import UpdateProducts from "./RTK Query/components/UpdateProducts";
// import AllProducts from "./RTK Query/components/AllProducts";
// import SpecificProducts from "./RTK Query/components/SpecificProducts";

const App = () => {
  return (
    <div>
      {/* //* Simple Counter */}
      {/* <Counter /> */}
      {/* API */}
      {/* <AllProducts /> */}
      {/* <SpecificProducts /> */}
      {/* <AddNewProduct /> */}
      <UpdateProducts productId={4} />
    </div>
  );
};
export default App;

import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const MyComponent = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/5");
        const result = (await response.json()) as Product;
        setData(result);
      } catch (error) {
        console.error("Error Fetching", error);
      }
    };
    // Fix: Await or handle the promise from fetchData
    void fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div key={data.id}>
          <p>Id: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
          <p>Discount (%): {data.discountPercentage}</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
          <img src={data.thumbnail} alt="" width={20} />
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

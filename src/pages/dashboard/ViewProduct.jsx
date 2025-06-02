import { useEffect, useState } from "react";
import "./product-card.css";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      if (!res.ok) {
        throw new Error("Failed to fetch proiduct.");
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="product-container">
        {products.length == 0 ? (
          <h1>Empty products</h1>
        ) : (
          products.map((pro) => (
            <div className="product-card">
              <img src={pro.image} alt="" />
              <h2>{pro.name}</h2>
              <p>${pro.price}</p>
              <p>{pro.category}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewProduct;

import { useEffect, useState } from "react";
import "./product-card.css";
import { Link, Outlet } from "react-router-dom";

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

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts(products.filter((pro) => pro.id != id));
    } catch (error) {
      console.log(error);
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
            <div key={pro.id} className="product-card">
              <img src={pro.image} alt="" />
              <h2>{pro.name}</h2>
              <p>${pro.price}</p>
              <p>{pro.category}</p>
              <Link to={`edit-product`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteProduct(pro.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewProduct;

import { Link, useNavigate, useParams } from "react-router-dom";
import "./update.css";
import { useEffect, useState } from "react";
const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "Food",
    image: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(!res.ok){
        throw new Error("Failed");
      }
      navigate("/dashboard/view-product")
    } catch (error) {
      alert("Failed");
    }
  };

  return (
    <div className="update-form">
      <form onSubmit={handleUpdate}>
        <h2 style={{ textAlign: "center" }}>Upadte Product</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Price"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Food">Food</option>
          <option value="Technology">Technology</option>
          <option value="Drink">Drink</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image url"
        />
        <Link to={"/dashboard/view-product"}>
          <button>Cancel</button>
        </Link>
        <button>Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

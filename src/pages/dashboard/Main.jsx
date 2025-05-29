import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [formData, setFormData] = useState({
    id: `${Date.now()}`,
    name: "",
    price: 0,
    category: "Food",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok == false) {
      alert("Failed to add product.");
      return;
    }
    alert("Add Product Successfully");
    setFormData({
      id: `${Date.now()}`,
      name: "",
      price: 0,
      category: "Food",
      image: "",
    });
  };

  return (
    <div className="parent-form">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Add Product</h2>
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
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default Main;

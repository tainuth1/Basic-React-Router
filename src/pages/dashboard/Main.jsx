import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="parent-form">
      <form>
        <h2 style={{textAlign: "center"}}>Add Product</h2>
        <input type="text" placeholder="Enter Name" />
        <input type="number" placeholder="Enter Price" />
        <select>
          <option value="Food">Food</option>
          <option value="Technology">Technology</option>
          <option value="Drink">Drink</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input type="url" placeholder="Enter image url" />
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default Main;

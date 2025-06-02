import React from 'react'
import "./main.css"
const UpdateProduct = () => {
  return (
    <div className="parent-form">
      <form>
        <h2 style={{ textAlign: "center" }}>Upadte Product</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
        />
        <select
          name="category"
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
          placeholder="Enter image url"
        />
        <button>Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct

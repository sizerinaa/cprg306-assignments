
'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold text-green-600 mb-4">Add New Item</h2>
      
      <label className="block text-gray-700 font-medium mb-2">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Enter item name"
        className="w-full px-4 py-2 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
      />
      
      <label className="block text-gray-700 font-medium mb-2">Quantity</label>
      <input
        type="number"
        min="1"
        max="20"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-full px-4 py-2 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
      />

      <label className="block text-gray-700 font-medium mb-2">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
        Add Item
      </button>
    </form>
  );
}

'use client'; // This directive enables client-side rendering
import { useState } from 'react';

export default function NewItem() {
  // Initialize state variables
  const [name, setName] = useState('');  // Name field
  const [quantity, setQuantity] = useState(1);  // Quantity field
  const [category, setCategory] = useState('Produce');  // Category field

  // Increment function
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    const item = { name, quantity, category };  // Create an item object
    console.log(item);  // Log the object to the console
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);  // Display an alert with the current state
    // Reset the state values
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Add New Item</h2>

      {/* Name field */}
<div>
  <label className="block text-gray-600 font-medium mb-1">Name</label>
  <input 
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    placeholder="Enter item name"
    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"  // Added text-black here
  />
</div>


      {/* Quantity field */}
      <div>
        <p className="text-lg text-gray-600 mb-2">Quantity: {quantity}</p>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded disabled:opacity-50 transition"
          >
            –
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded disabled:opacity-50 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Category field */}
      <div>
        <label className="block text-gray-600 font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
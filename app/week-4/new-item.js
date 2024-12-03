
'use client'; 
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); // Initialize state variable

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quantity: ${quantity}`); // Alert with the current quantity
    setQuantity(1); // Reset quantity to 1
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <p className="text-lg mb-4">Current Quantity: {quantity}</p>
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Increment
        </button>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
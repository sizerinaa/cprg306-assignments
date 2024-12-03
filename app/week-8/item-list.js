'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    return sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category);
  });

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Shopping List</h2>

      <div className="flex mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`flex-1 py-2 mx-1 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`flex-1 py-2 mx-1 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
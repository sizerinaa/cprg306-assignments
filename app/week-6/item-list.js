'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json'; 

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name'); 

  // Sorting logic
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Sorting buttons */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-600">Sort Items</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out ${
              sortBy === 'name'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy('category')}
            className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out ${
              sortBy === 'category'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy('grouped')}
            className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out ${
              sortBy === 'grouped'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Group by Category
          </button>
        </div>
      </div>

      {/* Render grouped items */}
      {sortBy === 'grouped' ? (
        Object.keys(groupedItems).sort().map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 capitalize mb-2">{category}</h3>
            <ul className="bg-white border border-gray-200 rounded-lg shadow-md">
              {groupedItems[category].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
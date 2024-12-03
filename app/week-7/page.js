'use client';

import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Shopping List App</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
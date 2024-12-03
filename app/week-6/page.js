'use client';

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-green-100 py-12">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}
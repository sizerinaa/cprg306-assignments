'use client';

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-blue-200 py-12">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}
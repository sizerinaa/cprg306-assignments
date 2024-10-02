import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center bg-blue-100 p-4 w-1/2 rounded-lg shadow-md mb-2">
    <div>
      <strong className="text-lg font-semibold">{name}</strong>
      <p className="text-sm text-gray-600">Category: {category}</p>
      <p className="text-sm text-gray-800">Quantity: {quantity}</p>
    </div>
  </li>
);
};

export default Item;

<ul>
  <Item name="milk, 4 L 🥛" quantity={1} category="dairy" />
  <Item name="bread 🍞" quantity={2} category="bakery" />
  <Item name="eggs, dozen 🥚" quantity={2} category="dairy" />
  <Item name="bananas 🍌" quantity={6} category="produce" />
  <Item name="broccoli 🥦" quantity={3} category="produce" />
  <Item name="chicken breasts, 1 kg 🍗" quantity={1} category="meat" />
  <Item name="pasta sauce 🍝" quantity={3} category="canned goods" />
  <Item name="spaghetti, 454 g 🍝" quantity={2} category="dry goods" />
  <Item name="toilet paper, 12 pack 🧻" quantity={1} category="household" />
  <Item name="paper towels, 6 pack" quantity={1} category="household" />
  <Item name="dish soap 🍽️" quantity={1} category="household" />
  <Item name="hand soap 🧼" quantity={4} category="household" />
</ul>
import Item from "./item";
import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

const items = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

const ItemList = () => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;

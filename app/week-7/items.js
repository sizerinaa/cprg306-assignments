export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
        <div className="text-green-600 flex-1">{name}</div>
        <div className="text-black text-center w-10">{quantity}</div> 
        <div className="text-gray-500 capitalize w-2/4 text-right">{category}</div> 
      </li>
    );
  }
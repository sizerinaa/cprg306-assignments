export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center p-4 hover:bg-green-50 transition duration-200 ease-in-out">
        <span className="text-gray-900 font-medium capitalize w-1/2">{name}</span>
        <span className="text-gray-600 w-1/4 text-center">Qty: {quantity}</span>  
        <span className="text-blue-700 capitalize w-1/4 text-right">{category}</span> 
      </li>
    );
  }
import { FaHammer } from 'react-icons/fa';
import { FiAward, FiSettings } from 'react-icons/fi';

export default function Footer1() {
  return (
    <div className="sticky z-50 bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl flex justify-between  px-8 py-4">
      
      {/* Rewards */}
      <div className="relative flex flex-col items-center">
        <FiAward className="text-gray-500 text-2xl" />
        <span className="text-sm text-gray-600">Rewards</span>
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
      </div>

      {/* Central Button */}
      <div className="relative -translate-y-6 bg-teal-500 rounded-full p-4 shadow-lg">
        <FaHammer className="text-white text-2xl" />
      </div>

      {/* Upgrade */}
      <div className="flex flex-col items-center">
        <FiSettings className="text-gray-500 text-2xl" />
        <span className="text-sm text-gray-600">Upgrade</span>
      </div>
    </div>
  );
}

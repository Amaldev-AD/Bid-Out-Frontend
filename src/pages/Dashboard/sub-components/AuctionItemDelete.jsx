import React from "react";
import { Link } from "react-router-dom";

const AuctionItemDelete = () => {
  return (
    <>
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-white border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr className="bg-gradient-to-r from-[#32746c] to-[#1C4742] text-white">
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="py-2 px-4">
                <img src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486" alt="" className="h-12 w-12 object-cover rounded" />
              </td>
              <td className="py-2 px-4">INTEL CPU</td>
              <td className="py-2 px-4 flex space-x-2">
                <Link
                  to={'/'}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  View
                </Link>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-all duration-300">
                  Delete
                </button>
              </td>
            </tr>

            {/* <tr className="text-left text-xl text-sky-600 py-3">
                <td>No Auctions found.</td>
              </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AuctionItemDelete;

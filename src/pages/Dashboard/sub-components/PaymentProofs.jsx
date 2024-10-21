import React from "react";

const PaymentProofs = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-[#32746c] to-[#1C4742] text-white">
              <th className="py-3 px-4 text-center uppercase font-semibold">
                User Id
              </th>
              <th className="py-3 px-4 text-center uppercase font-semibold">
                Status
              </th>
              <th className="py-3 px-4 text-center uppercase font-semibold">
                Auctions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-b border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <td className="text-center gap-4 py-3 px-4">234</td>
              <td className="py-3 px-4 font-medium text-center">Pending</td>
              <td className="py-3 px-4 font-semibold flex items-center justify-center gap-3">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300">Update</button>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-all duration-300">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentProofs;

import React from "react";
import { Button } from "@/components/ui/button";

const sampleData = [
  { id: 1, date: "2025-04-01" },
  { id: 2, date: "2025-04-03" },
  { id: 3, date: "2025-04-05" },
];

export default function View() {
  const handleView = (id) => {
    console.log("View clicked for ID:", id);
    // Navigate or show modal here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          View History
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <Button
                      variant="outline"
                      onClick={() => handleView(item.id)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
              {sampleData.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

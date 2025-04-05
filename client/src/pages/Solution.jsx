import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Solution() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    // You can send `image` and `prompt` to backend
    console.log("Submitted Image:", image);
    console.log("Prompt:", prompt);
  };

  return (
    <div className="min-h-screen  bg-gray-50 p-6">
      <div className="max-w-6xl mt-20 mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Analyze Crop or Land
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <div className="flex flex-col items-start">
            <label className="font-medium mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded-md w-full"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="mt-4 rounded-lg w-full max-h-72 object-cover border"
              />
            )}
          </div>

          {/* Prompt Section */}
          <div className="flex flex-col">
            <label htmlFor="prompt" className="font-medium mb-2">
              Enter Prompt / Notes
            </label>
            <textarea
              id="prompt"
              rows="8"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Suggest the best fertilizer for wheat in sandy soil"
              className="border p-3 rounded-md resize-none w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <Button onClick={handleSubmit} className="px-8 py-2 text-lg">
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
}

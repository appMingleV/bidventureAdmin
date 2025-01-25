

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProductSubCategories = () => {
  const [subcategoryName, setSubcategoryName] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSubcategoryName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!subcategoryName || !image) {
      console.error("Please fill out all fields.");
      return;
    }

    // Prepare form data for sending
    const formData = new FormData();
    formData.append("name", subcategoryName);
    formData.append("imageUrl", image);

    try {
      // Make the POST request to your backend
      const response = await axios.post("http://localhost:3001/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Subcategory added:", response.data);

      // Reset form fields after submission
      setSubcategoryName('');
      setImage(null);

      // Navigate back to categories page after submission
      navigate('/categories');
    } catch (error) {
      console.error("Error adding subcategory:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mx-auto mt-5 p-10">
      {/* <h2 className="text-4xl font-bold mb-4 ml-9">Add New Subcategory</h2> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">+ New</p>
  <p className="inline text-[#EF8120]">Subcategory</p>
  </h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg mx-10 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategoryName">
            Subcategory Name
          </label>
          <input
            type="text"
            id="subcategoryName"
            value={subcategoryName}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter subcategory name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
            Upload Image
          </label>
          <input
            type="file"
            id="imageUpload"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:bg-blue-400 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{backgroundColor: '#172554'}}
          >
            Add Subcategory
          </button>
          <button
            type="button"
            onClick={() => navigate('/categories')}
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2.5 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductSubCategories;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {
    profileImage: null,
    Name: "",
    email: "",
    address: "",
    phone: "",
  };

  const handleSaveChanges = () => {
    alert("Profile updated successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-50 shadow-xl rounded-lg border border-gray-200">
      <h1 className="text-lg font-semibold ml-[11rem] text-black-800 mb-6">Edit Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveChanges();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block font-semibold text-black-800 mb-2">Name</label>
          <input
            type="text"
            defaultValue={user.Name}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-700  border-red-500"
          />
        </div>
        <div>
          <label className="block font-semibold text-black-800 mb-2">Email</label>
          <input
            type="email"
            value={user.email}  
            className="w-full px-4 py-2 border rounded-lg border-red-500 focus:outline-none focus:border-blue-700 bg-gray-100"
            readOnly  
            placeholder="appmingle@example.com"
          />
        </div>
        <div>
          <label className="block font-semibold text-black-800 mb-2">
            Address
          </label>
          <input
            type="text"
            defaultValue={user.address}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-700 border-red-500"
          />
        </div>
        <div>
          <label className="block font-semibold text-black-800 mb-2">Phone</label>
          <input
            type="text"
            value={user.phone}  
            className="w-full px-4 py-2 border rounded-lg border-red-500 focus:outline-none focus:border-blue-700 bg-gray-100"
            readOnly  
            placeholder="+91 6201345687"
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-400 px-4 py-2 rounded shadow"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-orange-500 px-4 py-2 rounded shadow"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;

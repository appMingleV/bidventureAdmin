import React, { useState } from "react";
import ActiveOrder from "../Orders/ActiveOrder";
import CancelledOrder from "../Orders/CancelledOrder"; 
import FulfilledOrder from "./FulfilledOrder";
import PendingOrder from "./PendingOrder";
import RestaurantDetails from "./RestaurantDetails";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const [status, setStatus] = useState("Restaurant");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();

  // Sample restaurant data, could be fetched from an API
  const [restaurants, setRestaurants] = useState([
    {
      id: "1",
      name: "Dominos",
      location: "New York, NY",
      category: "French Cuisine",
      owner: "John Doe",
      email: "contact@gourmetbistro.com",
      phone: "6245389621",
    },
    {
      id: "2",
      name: "Barista",
      location: "San Francisco, CA",
      category: "Japanese",
      owner: "Jane Smith",
      email: "info@sushiworld.com",
      phone: "7645387265",
    },
    {
      id: "3",
      name: "Swiggy",
      location: "San Francisco, CA",
      category: "Japanese",
      owner: "Jane Smith",
      email: "info@sushiworld.com",
      phone: "7645387265",
    },
    {
      id: "4",
      name: "Mithaas",
      location: "San Francisco, CA",
      category: "Japanese",
      owner: "Jane Smith",
      email: "info@sushiworld.com",
      phone: "7645387265",
    },
  ]);

  const handleView = (id) => {
    navigate(`/restaurant-details/${id}`);
  };

  // Dynamically render content based on selected status
  const renderStatusContent = () => {
    switch (status) {
      case "Active":
        return <ActiveOrder />;
      case "Rejected":
        return <CancelledOrder />;
      case "Registered":
        return <FulfilledOrder />;
      case "Pending":
        return <PendingOrder />;
      case "Restaurant":
        return (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                {["Name", "Location", "Category", "Owner", "Email", "Phone", "View Details"].map((header) => (
                  <th key={header} className="border border-gray-300 p-2 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{restaurant.name}</td>
                  <td className="border border-gray-300 p-2">{restaurant.location}</td>
                  <td className="border border-gray-300 p-2">{restaurant.category}</td>
                  <td className="border border-gray-300 p-2">{restaurant.owner}</td>
                  <td className="border border-gray-300 p-2">{restaurant.email}</td>
                  <td className="border border-gray-300 p-2">{restaurant.phone}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition"
                      onClick={() => handleView(restaurant.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-2">
      <div className="w-full max-w-4xl bg-white border rounded-2xl shadow-lg p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-orange-500">Restaurant List</h1>
          <div>
            <label htmlFor="statusDropdown" className="mr-2 text-gray-700">
              Status:
            </label>
            <select
              id="statusDropdown"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white shadow-sm text-gray-600 cursor-pointer focus:ring focus:ring-orange-300"
            >
              {["Restaurant", "Pending", "Registered", "Rejected", "Active"].map((option) => (
                <option key={option} value={option} className={option === "Restaurant" ? "text-green-500" : "text-gray-600"}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {renderStatusContent()}
      </div>
    </div>
  );
};

export default RestaurantList;

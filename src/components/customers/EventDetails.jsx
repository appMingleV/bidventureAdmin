import React from "react";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();

  const handleUserDetail = () =>{
    navigate("/user-details");
  }

  const handleRestaurantDetail = () => {
    navigate("/restaurant-details/1");
  };

  const handleAllUserDetail = () => {
    navigate("/alluser-details");
  }

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6 grid grid-cols-6 gap-x-8">

      {/* Event Details Card */}
      <div className="col-span-3 bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-2xl font-semibold text-gray-800 ml-44">Event Details</h3>
        <p className="text-gray-800 mt-4">
          Experience a delightful combination of adventure and gastronomy with Bidventure: A Culinary Journey. Our expert chefs and immersive ambiance will guide you through an exciting food and adventure experience.
        </p>
        <h3 className="font-semibold mt-4">Event Location:</h3>
        <p className="text-gray-800 mt-2">Restaurant Name: The Global Feast</p>
        <p className="text-gray-800">Address: 123 Adventure Lane, Culinary City, 56789</p>
        <p className="text-gray-800">Contact Number: +123 456 7890</p>
        <p className="text-gray-800">Event Type: Birthday</p>
        <p className="text-lg font-semibold text-green-600 mt-2">Price: ₹800</p>
        
      </div>

      {/* User Details and Restaurant Details */}
      <div className="col-span-3 space-y-4 ml-8">

        {/* User Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800 ml-36">User Details</h3>
          <p className="text-gray-800 mt-2">Name: John Doe</p>
          <p className="text-gray-800">Email: johndoe@example.com</p>
          <p className="text-gray-800">Address: Optimizaum Infotech, Sector 4, Noida</p>
          <p className="text-gray-800">Phone: +1234567890</p>
          <p className="text-lg font-semibold text-green-600 mt-2">Price: ₹800</p>
          <div className="flex justify-center">
            <button className="mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-blue-600"
            onClick = {()=>handleUserDetail()}>
              User
            </button>
            <button
              className="mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-blue-600 ml-10"
              onClick={()=>handleAllUserDetail()}
            >
              All User
            </button>
          </div>
        </div>

        {/* Restaurant Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 ml-36">Restaurant Details</h2>
          <p className="text-gray-800 mt-2">Restaurant Name: The Baristo</p>
          <p className="text-gray-800">Cuisine: French</p>
          <p className="text-gray-800">Location: 1234 Food Street, City</p>
          <p className="text-gray-800">Hours: Mon-Sun: 10 AM - 10 PM</p>
          <p className="text-lg font-semibold text-green-600 mt-4">Price: ₹1000</p>
          <div className="flex justify-center">
            <button
              className="mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-blue-600"
              onClick={()=>handleRestaurantDetail()}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

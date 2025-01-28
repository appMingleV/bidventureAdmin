import React from 'react';

const RestaurantDetails = () => {
  // Restaurant details and dishes data
  const restaurantDetails = {
    name: 'The Barista',
    mobile: '+91 6201349878',
    owner: 'Srikant Singh',
    email: 'srikant23@gmail.com',
    tagline: 'Quality never goes out of style.',
    street: 'Noida, Sector 4',
    bidPrice: '₹1000',
    city: 'Noida',
    district: 'Noida',
    seatingCapacity: 200,
    eventType: 'Birthday Party',
  };

  const dishes = [
    {
      name: 'Coffee',
      description: 'A freshly brewed coffee with rich aroma and smooth taste.',
      price: '₹150',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg'
    },
    {
      name: 'Pasta',
      description: 'A creamy pasta with a delicious blend of herbs and spices.',
      price: '₹300',
      imageUrl: 'https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M='
    },
    {
      name: 'Burger',
      description: 'A juicy and tender burger served with crispy fries on the side.',
      price: '₹250',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg'
    }
  ];

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-3">
      <div className="flex flex-col w-full max-w-5xl">

        {/* First Card */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col w-full mb-4">
          <div className="flex flex-wrap gap-4 justify-between">

            {/* Text Section */}
            <div className="flex flex-col w-2/5 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 ml-96">Details:</h3>
              <p className="text-xl font-bold text-gray-800 mt-2">{restaurantDetails.name}</p>
              <ul className="list-disc pl-10 space-y-2 text-lg text-gray-800">
                {Object.entries(restaurantDetails).map(([key, value]) => {
                  // Skip name, as it's already printed above
                  if (key === 'name') return null;
                  return (
                    <li key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</li>
                  );
                })}
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex w-2/5 justify-center pt-24">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chanwalrus-941861.jpg&fm=jpg"
                alt="Restaurant"
                className="rounded-lg shadow-md w-60 h-72 object-cover"
              />
            </div>

          </div>
        </div>

        {/* Second Card for Dishes */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col w-full">
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="flex flex-col w-full">
              <h3 className="text-2xl font-semibold text-gray-800 ml-96">Dishes</h3>
              <div className="flex gap-6 mt-4">
                {dishes.map(dish => (
                  <div key={dish.name} className="bg-gray-50 w-1/3 p-4 rounded-lg shadow-md">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-40 object-cover rounded-lg shadow-sm"
                    />
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-800">{dish.name}</h4>
                      <p className="text-sm text-gray-600">{dish.description}</p>
                      <p className="text-lg font-bold text-gray-800">{dish.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RestaurantDetails;

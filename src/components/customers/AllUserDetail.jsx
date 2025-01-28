import React from 'react';

const AllUserDetails = () => {
  const users = [
    {
      name: "Srikant Singh",
      email: "srikant@example.com",
      phone: "+1234567890",
      address: "123 Street, City, Country",
      price: "₹800",
      image: "https://static.vecteezy.com/system/resources/thumbnails/053/741/746/small/a-colorful-lizard-with-a-blue-and-orange-face-is-staring-at-the-camera-the-lizard-s-face-is-the-main-focus-of-the-image-and-it-is-curious-or-alert-the-bright-colors-of-the-lizard-s-face-photo.jpg",
    },
    {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+9876543210",
      address: "456 Road, Town, Country",
      price: "₹1000",
      image: "https://static.vecteezy.com/system/resources/thumbnails/053/741/746/small/a-colorful-lizard-with-a-blue-and-orange-face-is-staring-at-the-camera-the-lizard-s-face-is-the-main-focus-of-the-image-and-it-is-curious-or-alert-the-bright-colors-of-the-lizard-s-face-photo.jpg",
    },
    {
      name: "Amit Verma",
      email: "amit@example.com",
      phone: "+7896541230",
      address: "789 Avenue, City, Country",
      price: "₹1200",
      image: "https://static.vecteezy.com/system/resources/thumbnails/053/741/746/small/a-colorful-lizard-with-a-blue-and-orange-face-is-staring-at-the-camera-the-lizard-s-face-is-the-main-focus-of-the-image-and-it-is-curious-or-alert-the-bright-colors-of-the-lizard-s-face-photo.jpg",
    },
    
  ];

  return (
    <div className="flex flex-wrap justify-between p-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 px-3 mb-6"
        >
          <div
            className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg"
            style={{ width: '100%' }}
          >
            <div className="flex justify-center mb-6">
              <img
                src={user.image}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-300"
              />
            </div>
            <h1 className="text-2xl font-semibold mb-6 text-center">User Details</h1>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b">Field</th>
                  <th className="px-4 py-2 text-left border-b">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Name</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Email</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Phone</td>
                  <td className="px-4 py-2 border-b">{user.phone}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Address</td>
                  <td className="px-4 py-2 border-b">{user.address}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Bid Price</td>
                  <td className="px-4 py-2 border-b">{user.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUserDetails;

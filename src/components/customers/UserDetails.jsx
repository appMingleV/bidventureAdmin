import React from 'react';

const UserDetails = () => {
  const user = {
    name: "Srikant Singh",
    email: "srikant@example.com",
    phone: "+1234567890",
    address: "123 Street, City, Country",
    price: "₹800",
    image: "https://static.vecteezy.com/system/resources/thumbnails/053/741/746/small/a-colorful-lizard-with-a-blue-and-orange-face-is-staring-at-the-camera-the-lizard-s-face-is-the-main-focus-of-the-image-and-it-is-curious-or-alert-the-bright-colors-of-the-lizard-s-face-photo.jpg" 
  };

  return (
    <div className="w-1/2 mx-auto my-10 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
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
  );
}

export default UserDetails;

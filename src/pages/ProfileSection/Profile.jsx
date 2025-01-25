import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = {
    profileImage: null,
    Name: "Optimizaum",
    email: "appmingle@example.com",
    address: "04 Main Street, Noida",
    phone: "+91 6201345687",
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const editProfile = () => {
    navigate("/profile-edit");
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-50 shadow-xl rounded-lg border border-gray-200">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-5xl text-gray-600">👤</span>
          )}
        </div>
        <h1 className="text-lg font-semibold text-gray-800">{user.Name}</h1>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-black-600">
            <strong className="font-semibold">Name:</strong> {user.Name}
          </p>
        </div>
        <div>
          <p className="text-black-600">
            <strong className="font-semibold">Email:</strong> {user.email}
          </p>
        </div>
        <div>
          <p className="text-black-600">
            <strong className="font-semibold">Address:</strong> {user.address}
          </p>
        </div>
        <div>
          <p className="text-black-600">
            <strong className="font-semibold">Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-between">

        <button
          onClick={editProfile} 
          className="bg-orange-500 px-4 py-2 rounded shadow"
        >
          Edit Profile
        </button>
        <button
          onClick={handleGoHome}
          className="bg-orange-500 px-4 py-2 rounded shadow"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;

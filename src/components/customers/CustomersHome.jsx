import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventDetails from "./EventDetails";

const CustomersHome = () => {
    const [status, setStatus] = useState("Pending");
    
    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/event-details/${id}`)
    }

    const customers = [
        {
            id:"1",
            username: "JohnDoe",
            Restaurant_Name: "Spicy Delights",
            Event_Date: "2025-02-15",
            Bid_by_Price: "₹700",
            Bid_by_Restaurant: "₹1000",
            phone: "6245389621"
        },
    ];

    const renderStatusContent = () => {
        if (status === "Completed") {
            return <div className="text-center text-green-500 font-semibold">No completed orders at the moment.</div>;
        }

        if (status === "Consult") {
            return <div className="text-center text-blue-500 font-semibold">Consultation details will be available soon.</div>;
        }

        if (status === "Pending") {
            return (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2 text-left">User Name</th>
                            <th className="border border-gray-300 p-2 text-left">Restaurant Name</th>
                            <th className="border border-gray-300 p-2 text-left">Event Date</th>
                            <th className="border border-gray-300 p-2 text-left">Bid by price</th>
                            <th className="border border-gray-300 p-2 text-left">Bid by Restaurant</th>
                            <th className="border border-gray-300 p-2 text-left">Phone</th>
                            <th className="border border-gray-300 p-2 text-left">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2 text-center">{customer.username}</td>
                                <td className="border border-gray-300 p-2 text-center">{customer.Restaurant_Name}</td>
                                <td className="border border-gray-300 p-2 text-center">{customer.Event_Date}</td>
                                <td className="border border-gray-300 p-2 text-center">{customer.Bid_by_Price}</td>
                                <td className="border border-gray-300 p-2 text-center">{customer.Bid_by_Restaurant}</td>
                                <td className="border border-gray-300 p-2 text-center">{customer.phone}</td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button
                                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition"
                                        onClick={()=>handleView(customer.id)}
                                        >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }

        return null;
    };

    return (
        <>
            <div className="flex justify-center items-center bg-gray-100 mt-2">
                <div className="w-full max-w-4xl bg-white border rounded-2xl shadow-lg p-6 relative">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold text-orange-500">Event</h1>
                        <div>
                            <label htmlFor="statusDropdown" className="mr-2 text-gray-700">
                                Filter:
                            </label>
                            <select
                                id="statusDropdown"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="px-4 py-2 border rounded-lg bg-white shadow-sm text-gray-600 cursor-pointer focus:ring focus:ring-orange-300"
                            >
                                <option value="Pending" className="text-orange-600">Pending</option>
                                <option value="Completed" className="text-green-500">Completed</option>
                                <option value="Consult" className="text-blue-500">Consult</option>
                            </select>
                        </div>
                    </div>
                    {renderStatusContent()}
                </div>
            </div>
        </>
    );
};

export default CustomersHome;

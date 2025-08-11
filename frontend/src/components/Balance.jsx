import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Balance = () => {
  const [balance, setBalance] = useState(null); // Initialize with null
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance); // Set balance from the API response
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const buttonHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        {/* Conditional rendering to avoid .toFixed() on undefined */}
        {balance !== null ? `Rs ${balance.toFixed(2)}` : "Loading..."}
      </div>
      <button
        onClick={buttonHandler}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300 ease-in-out ml-auto"
      >
        Logout
      </button>
    </div>
  );
};

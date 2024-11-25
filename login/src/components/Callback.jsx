import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Extract access token from URL
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.replace("#", "")).get("access_token");

    if (token) {
      fetchUserInfo(token); // Fetch user info using the token
    } else {
      console.error("Access token not found.");
      navigate("/"); // Redirect back to login if token is missing
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data); // Store user info in state
    } catch (error) {
      console.error("Error fetching user profile:", error);
      navigate("/"); // Redirect back to login on error
    }
  };

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.name}!</h1>
          <img
            src={userData.picture}
            alt="Profile"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Callback;

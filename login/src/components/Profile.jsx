import React, { useState } from "react";

const Profile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [profilePic, setProfilePic] = useState(null);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("email", user.email); // Assuming email is used to identify users
    formData.append("name", name);
    if (profilePic) formData.append("profilePic", profilePic);

    const response = await fetch("http://localhost:8000/api/profile", {
      method: "PUT",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      alert("Profile updated successfully!");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {user.profilePic && (
        <img src={`http://localhost:8000${user.profilePic}`} alt="Profile" />
      )}

      <form onSubmit={handleProfileUpdate} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setProfilePic(e.target.files[0])}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

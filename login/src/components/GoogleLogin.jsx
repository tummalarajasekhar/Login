import React from "react";

const GoogleLogin = () => {
  const clientId = "920018623700-01v7sbokmdmglcde5qq3238cd05sfarg.apps.googleusercontent.com"; // Replace with your Google Client ID
  const redirectUri = "http://localhost:5173/auth/callback"; // Update with your redirect URI
  const scope = "openid email profile";
  const responseType = "token";

  const loginWithGoogle = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl; // Redirect to Google Login
  };

  return (
    <div>
      <h1>Google Login</h1>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin

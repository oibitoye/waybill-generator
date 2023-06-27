// auth.js

export function isAuthenticated() {
  console.log("Auth.js")
    // Retrieve the authentication token from local storage or state
    const token = localStorage.getItem('token');
    // Check if the token exists and is valid (you may have your own logic here)
    return !!token; // Return true if the token exists, false otherwise
  }
  
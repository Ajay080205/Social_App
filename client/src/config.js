// let BASE_URL = "https://social-app-6edm.onrender.com";
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   BASE_URL = "http://localhost:4000/";
// }

// export { BASE_URL };
let BASE_URL;

if (window.location.hostname === "localhost") {
  // Development backend
  BASE_URL = "http://localhost:4000";
} else {
  // Production backend (your backend Render service URL)
  BASE_URL = "https://social-app-6edm.onrender.com";
}

export { BASE_URL };


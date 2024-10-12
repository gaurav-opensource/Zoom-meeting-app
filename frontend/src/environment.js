// environment.js
let IS_PROD = true; // Set to false for local development
const server = IS_PROD ? "https://zoom-meeting-app-backend.onrender.com" : "http://localhost:8000";

export default server;
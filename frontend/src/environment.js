// environment.js
let IS_PROD = true; // Set to false for local development
const server = IS_PROD ? "https://Zoom-meeting-app.onrender.com" : "http://localhost:8000";

export default server;
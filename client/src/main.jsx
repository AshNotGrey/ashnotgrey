import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Disable text selection, context menu, and devtools
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
// document.addEventListener("keydown", (e) => {
//   if (
//     e.key === "F12" ||
//     (e.ctrlKey && e.shiftKey && e.key === "I") ||
//     (e.ctrlKey && e.shiftKey && e.key === "J") ||
//     (e.ctrlKey && e.key === "U")
//   ) {
//     e.preventDefault();
//   }
// });
// setInterval(() => {
//   const before = new Date().getTime();
//   // eslint-disable-next-line no-debugger
//   debugger;
//   const after = new Date().getTime();
//   if (after - before > 100) {
//     alert("DevTools is open!");
//     window.location.href = "/";
//   }
// }, 1000);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

/*
 when you want to create react app instead of using create-react-app
 you should use vite to make everting fast and modern
 and vite a tool for the front end
 for more read this: https://vite.dev/

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);

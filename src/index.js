require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import {createRoot} from "react-dom/client"
import App from "./app"


const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);
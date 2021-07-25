
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundColor: '#cccccc',backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
    <App />
    <ToastContainer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
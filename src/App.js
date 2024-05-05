import "./App.css";
import { Router, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  const userInfo = localStorage.getItem("userInfo");
    let userDetails = JSON.parse(userInfo);

 

  return (
    <div className="App">
     {userDetails?.email?
      <Dashboard />: <Login />}
    </div>
  );
}

export default App;

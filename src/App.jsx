import React from "react";
import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Dashboard from "./components/Dashboard.jsx"
import MainLeft from "./components/MainLeft.jsx"
import Small from "./components/Small.jsx";
const App = () => {
  return (
    <div>
    <Header />
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Dashboard />
        <Small />
        <MainLeft />  
      </div>
    </div>
  </div>
  
  );
};

export default App;

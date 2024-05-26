import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <>
      <Navbar></Navbar>
      
        {/* <div className="col-2 sidebar">
          {" "}
          <Sidebar></Sidebar>
        </div> */}
       
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
     
   
    </>
  );
}

export default App;

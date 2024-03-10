import { BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar/NavBar";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-cordovan-100">
        <NavBar />

        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

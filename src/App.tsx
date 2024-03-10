import { HashRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar/NavBar";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen bg-cordovan-100">
        <NavBar />

        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}

export default App;

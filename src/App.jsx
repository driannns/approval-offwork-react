import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Offwork from "./views/Offwork";
import Employee from "./views/Employee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/offwork" element={<Offwork />} />
      </Routes>
    </>
  );
}

export default App;

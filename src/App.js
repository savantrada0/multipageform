import "./App.css";
import Navbar from "./components/Navbar";
import EmployeeForm from "./pages/EmployeeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeData from "./pages/EmployeeData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employeedata" element={<EmployeeData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import EmpCreate from "./CRUD/EmpCreate";
import EmpList from "./CRUD/EmpList";
import { Counter } from "./Components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditEmployee } from "./CRUD/EditEmployee";
import { AboutEmployee } from "./CRUD/AboutEmployee";
import ParentComp from "./Components/ParentComp";
import UseReducer from "./Components/UseReducer";

function App() {
  return (
    <div>
      <Counter />
      <ParentComp />
      <UseReducer />
      <div>
        <h1> React CRUD Operation </h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpList />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/create/:empId" element={<EditEmployee />} />
          <Route path="/employee/about/:empId" element={<AboutEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

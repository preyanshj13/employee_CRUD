import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddEmp from './components/AddEmp/AddEmp';
import ViewEmp from './components/ViewEmp/ViewEmp';
import { Route, BrowserRouter, Routes} from "react-router-dom";
// import EditEmp from './components/EditEmp';
import Emp_Detail from './components/Emp_Detail/Emp_Detail';
// import EmpDetails from './components/EmpDetails';

function App() {
  return (
    <>
    {/* <Router> */}
      <BrowserRouter>
        <Navbar />
      <Routes>
        {/* <ViewEmp /> */}
        <Route exact path="/" element={<ViewEmp/>} />
        {/* <AddEmp /> */}
        <Route path="/add" element={<AddEmp/>} />
        {/* eslint-disable-next-line */}
        <Route path="/detail/:id" element={<Emp_Detail />} />
        {/* <Route path="/test/:id" element={Test1} /> */}
        {/* <Route path="abc" element={EmpDetails} /> */}
        </Routes>
      </BrowserRouter>
    {/* </Router> */}

    {/* <div className="App">
        
    </div> */}
    </>
  );
}

export default App;
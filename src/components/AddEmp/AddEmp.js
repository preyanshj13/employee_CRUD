import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddEmp.css';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

export default function AddEmp() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    // const [lastName, setLastName] = useState('')
    const [domain, setDomain] = useState('')
    const image = useState("http://dummyimage.com/100x100.png/ff4444/ffffff")
    const navigate = useNavigate();

    const postData = () => {

        if(!id || !name || !domain || !number || !email || !address || !date) {
            return alert("All fields are required.")
        }

        else(axios.post('http://localhost:3000/employee',{id, name, domain, number, email, address, date, image})
            .then(console.log('data posted!'))
            .then(navigate('/'))
        )
            // <Redirect to="/" />
            
    }

    // function handleBlur() {
    //     const empID = document.getElementById('inputId');
    //     if(empID.style.length <= 0 || empID.style.length>7) {
    //         empID.style.border = '1px solid red';
    //         document.getElementById('submit')
    //     }
    // }

    return (
        <>
        <h1 className='heading mb-5 mt-5'>Add New Employee</h1>
        <form className='employeeForm col-sm-8'>


            <div className="row mb-4">
                <label htmlFor="inputId" className="col-sm-2 col-form-label"><strong>
                    Employee ID *
                </strong></label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputId" value={id} onChange={(e) => setId(e.target.value)}  minLength={7} maxLength={7}  placeholder="Enter Employee ID"/>
                    {/* onBlur={handleBlur} */}
                </div>
            </div>

            {/* <div className='row'> */}
                <div className="row mb-4">

                    <label htmlFor="inputName" className="col-sm-2 col-form-label"><strong>
                        Name *
                    </strong></label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} minLength={3} placeholder="Enter Name"/>
                    </div>
                
                    {/* <label htmlFor="inputLastName" className="col-sm-2 col-form-label">
                        Last Name*
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputLastName" required onChange={(e) => setLastName(e.target.value)}/>
                    </div> */}

                </div>
            {/* </div> */}

            <div className="row mb-4">
                <label htmlFor="inputPhone" className="col-sm-2 col-form-label"><strong>
                    Phone Number *
                </strong></label>
                <div className="col-sm-4">
                    <input type="phone" className="form-control" id="inputPhone" value={number} onChange={(e) => setNumber(e.target.value)} minLength={10} maxLength={10} placeholder="Enter Phone Number"/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label"><strong>
                    Email ID *
                </strong></label>
                <div className="col-sm-4">
                    <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email ID"/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="inputDob" className="col-sm-2 col-form-label"><strong>
                    Date of Birth *
                </strong></label>
                <div className="col-sm-4">
                    <input type="date" className="form-control" id="inputDob" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="inputAddress" className="col-sm-2 col-form-label"><strong>
                    Address *
                </strong></label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address"/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="domain" className="col-sm-2 col-form-label"><strong>
                    Select Domain *
                </strong></label>
                <div className="col-sm-4">
                    <select className="form-select" aria-label="Default select example" required onChange={(e) => setDomain(e.target.value)}>
                        <option selected disabled defaultValue>Select your Domain</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Legal">Legal</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Training">Training</option>
                    </select>
                </div>
            </div>

            <button id='submit' type="submit" className="btn add btn-primary" onClick={() => postData()}>
                Add Employee
            </button>
        </form>
        </>
    );
}

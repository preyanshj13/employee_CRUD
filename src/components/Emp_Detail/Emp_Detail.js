import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import './Emp_Detail.css'
import axios from 'axios';


export default function Emp_Detail() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    const [domain, setDomain] = useState('')
    const image = useState("http://dummyimage.com/100x100.png/ff4444/ffffff")


    let {id} = useParams();
    // console.log(id)
    // const [data, setData] = useState([])

    const [emp_data, setEmp_data] = useState([])

    const edit = () => {
        axios.put(`http://localhost:3000/employee/${id}`,{name, number, email, date, address, domain, image})
            .then(setNumber(number),setEmail(email),setAddress(address),setDomain(domain),setName(name),setDate(date))
            .then(console.log(`Data Edited for ${id}!`));
    }


    
    const editData = (id) => {
        const elem = document.getElementById('editDetails');
        // elem.style.transition = 'ease-in';
        // elem.style.transitionDuration = '3s';
        elem.style.transitionDelay = '1s';
        elem.style.visibility = 'visible';

        console.log('edit clicked for ' + id)
    }
    

    useEffect(() => {
        axios
            .get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                // console.log(res.data);
                setEmp_data(res.data)
                setName(res.data.name)
                setNumber(res.data.number)
                setEmail(res.data.email)
                setDate(res.data.date)
                setAddress(res.data.address)
                setDomain(res.data.domain)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id])


  return (
    <>
    <div className='Emp_Detail'>
        <h1 className='empName mb-5'><strong>{emp_data.name}</strong></h1>
        
        {/* <div className='data'>
            <div className='infoCol1 col-sm-3'>
                <h5 className='row1'><strong>Employee ID</strong> :- {id}</h5>
                <h5 className='row2'><strong>Domain</strong> :- {emp_data.domain}</h5>
            </div>
            <div className='infoCol2 col-sm-4'>
                <h5 className='row1'><strong>Email ID</strong> :- {emp_data.email}</h5>
                <h5 className='row2'><strong>Date of Birth</strong> :- {emp_data.date}</h5>
            </div>
            <div className='infoCol3 col-sm-3'>
                <h5 className='row1'><strong>Mobile Number</strong> :- +91 {emp_data.number}</h5>
                <h5 className='row2'><strong>Address</strong> :- {emp_data.address}</h5>
            </div>
        </div>
        <div className='editButton'>
            <button className=' btnEdit mb-5' onClick={() => editData(id)}>Edit Details</button>
        </div> */}
        
        <div className='data1'>
            <div className='details'>
                <h5><strong>Employee ID</strong> :- {id}</h5>
                <h5><strong>Email ID</strong> :- {emp_data.email}</h5>
                <h5><strong>Mobile Number</strong> :- +91 {emp_data.number}</h5>
            </div>

            <div className='details'>
                <h5><strong>Domain</strong> :- {emp_data.domain}</h5>
                <h5><strong>Date of Birth</strong> :- {emp_data.date}</h5>
                <h5><strong>Address</strong> :- {emp_data.address}</h5>
            </div>

            <div className="detail">
                <img className='empImg mb-4' src={emp_data.image} alt="Employee" />
            </div>
        </div>
        <div className='editButton'>
            <button className=' btnEdit mb-5' onClick={() => editData(id)}>Edit Details</button>
        </div>
    </div>


    {/* EDIT EMPLOYEE FORM */}
    <form className='editDetails' id='editDetails'>


        <div className="editForm">
            <div className='col1'>

                <div className="row editName mb-4">
                    <label htmlFor="editName" className="col-sm-4 col-form-label"><strong>
                        Name
                    </strong></label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="editName" defaultValue={emp_data.name}  onChange={(e) => setName(e.target.value)} minLength={3}/>
                    </div>
                </div>

                <div className="row editEmail mb-4">
                    <label htmlFor="editEmail" className="col-sm-4 col-form-label"><strong>
                        Email ID
                    </strong></label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" id="editEmail" defaultValue={emp_data.email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="editAddress" className="col-sm-4 col-form-label"><strong>
                        Address 
                    </strong></label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="editAddress" onChange={(e) => setAddress(e.target.value)} defaultValue={emp_data.address} />
                    </div>
                </div>

                
            </div>

            <div className='col2'>

                <div className="row editPhone mb-4">
                    <label htmlFor="inputPhone" className="col-sm-5 col-form-label"><strong>
                        Phone Number
                    </strong></label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control" id="inputPhone" onChange={(e) => setNumber(e.target.value)} minLength={10} maxLength={10} defaultValue={emp_data.number} />
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="domain" className="col-sm-5 col-form-label"><strong>
                        Select Domain 
                    </strong></label>
                    <div className="col-sm-7">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setDomain(e.target.value)}>
                            <option defaultValue>{emp_data.domain}</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Sales">Sales</option>
                            <option value="Legal">Legal</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="editDob" className="col-sm-5 col-form-label"><strong>
                        Date of Birth
                    </strong></label>
                    <div className="col-sm-7">
                        <input type="date" className="form-control" id="editDob" defaultValue={emp_data.date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="editButton">
            <button type="submit" className="btn btn-primary" onClick={() => edit(id)}>
                Edit Employee
            </button>
        </div>





        {/* <div className='editForm'>

            <div className="row editName mb-4">
                <label htmlFor="editName" className="col-sm-4 col-form-label"><strong>
                    Name
                </strong></label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="editName" defaultValue={emp_data.name}  onChange={(e) => setName(e.target.value)} minLength={3}/>
                </div>
            </div>

            <div className="row editEmail mb-5">
                <label htmlFor="editEmail" className="col-sm-4 col-form-label"><strong>
                    Email ID
                </strong></label>
                <div className="col-sm-8">
                    <input type="email" className="form-control" id="editEmail" defaultValue={emp_data.email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>

            <div className="row editPhone mb-5">
                <label htmlFor="inputPhone" className="col-sm-5 col-form-label"><strong>
                    Phone Number
                </strong></label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" id="inputPhone" onChange={(e) => setNumber(e.target.value)} minLength={10} maxLength={10} defaultValue={emp_data.number} />
                </div>
            </div>

        </div>
        
        <div className='editForm'>

            <div className="row mb-4">
                <label htmlFor="editAddress" className="col-sm-4 col-form-label"><strong>
                    Address 
                </strong></label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="editAddress" onChange={(e) => setAddress(e.target.value)} defaultValue={emp_data.address} />
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="editDob" className="col-sm-5 col-form-label"><strong>
                    Date of Birth *
                </strong></label>
                <div className="col-sm-7">
                    <input type="date" className="form-control" id="editDob" defaultValue={emp_data.date} onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="domain" className="col-sm-5 col-form-label"><strong>
                    Select Domain 
                </strong></label>
                <div className="col-sm-7">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setDomain(e.target.value)}>
                        <option defaultValue>{emp_data.domain}</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Legal">Legal</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Training">Training</option>
                    </select>
                </div>
            </div>

        </div> */}
        
    </form>

    </>
  )
}

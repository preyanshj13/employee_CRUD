import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewEmp.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function ViewEmp() {
    const [data, setData] = useState([]);
    // const [temp, setTemp] = useState([])

    // axios.get('http://localhost:3000/employee').then(res => setData(res.data))
    useEffect(() => {
        axios
            .get('http://localhost:3000/employee')
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
                // setTemp(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const confirmDelete = (id) => {
        // id.preventDefault();
        swal("Delete Record", "Are you sure?", {
            buttons: {
              cancel: "NO!",
              catch: {
                text: "Yes!",
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "catch":
                swal("Deleted", "Record Deleted Successfully");
                deleteData(id);
                break;
           
              default:
                swal("Not Deleted", "Record not Deleted!");
            }
          });

        // if(window.confirm(`Are you sure you want to DELETE this user?`) === true) {
            // deleteData(id)
            // console.log('you pressed ok')
        // }
    }

    const deleteData = (id) => {
        //Logic to delete the item
        axios.delete(`http://localhost:3000/employee/${id}`).then(console.log('deleted item'))
        let newData = [...data].filter((data) => data.id !== id);
        setData(newData);
    }

    // let filteredEmployees
    // const [temp, setTemp] = useState([])
    
    // filtered employees
    // const [filtered, setFiltered] = useState('')
    // let filteredEmployees = filtered.length === 0 ? data : data.filter(
    //     item => (item.domain.toLowerCase()===filtered.toLowerCase()))

    // const filterEmp = (val) => {
    //     let filteredEmployees =  val.target.value.length === 0 ? temp : data.filter(
    //         (item) => item.domain.toLowerCase()===val.target.value.toLowerCase());
    //     setData(filteredEmployees);
    // }

    // THE ISSUE OCCURING IS THAT THE MAIN DATA IS GETTING MANIPULATED AFTER EVERY RUN SO I THINK WE WOULD HAVE TO FIND A WAY TO NOT HAMPER WITH THAT

    // const [search, setSearch] = useState('')
    // const searchEmp = (val) => {
    //     let searchedEmployees = val.target.value.length === 0 ? temp : data.filter(
    //         (item) => item.name.toLowerCase().includes(val.target.value.toLowerCase()));
    //     setData(searchedEmployees);
    // }

    // search employee bar
    const [search, setSearch] = useState('')
    let searchEmp = search.length === 0 ? data : data.filter(
        item => item.name.toLowerCase().includes(search.toLowerCase()))


    // console.log(data.id)
    // console.log(temp)

    // if(filtered.length !== 0)
    
    return (
        <>
        <div>
                {/* <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <option class="dropdown-item" type="button" value={'hr'}>HR</option>
                        <option class="dropdown-item" type="button" value={'ab'}>Another action</option>
                        <option class="dropdown-item" type="button" value={'cd'}>Something else here</option>
                    </div>
                </div> */}

            <form className="searchBox mb-5" role="search">
                {/* <div>
                    <select className="form-select" aria-label="filterButton" onChange={filterEmp}>
                        <option selected disabled defaultValue>Filter</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Editor">Editor</option>
                        <option value="Sales">Sales</option>
                        <option value="Automation Specialist">Automation Specialist</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Teacher">Teacher</option>
                        <option value="">None</option>
                    </select>
                </div> */}
                {/* <input className="searchText" type="text" placeholder="Search Employee" id='search' onChange={searchEmp}/> */}
                <input className="searchText" type="text" placeholder="Search Employee" id='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>
        </div>

        <h2 className='head mb-5'><strong>Employee List</strong></h2>

        <div className="container">
            <div className="row">
                {searchEmp.map(item => (
                <div className="card col-md-4 " key={item.id}>
                    <img className="card-img-top" src={`${item.image}`} alt="Employee"/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link style={{textDecoration: 'none'}} to = {`/detail/${item.id}`}>
                                {item.name}
                            </Link>
                        </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Employee ID- </strong>{item.id}</li>
                        <li className="list-group-item"><strong>Domain- </strong>{item.domain}</li>
                    </ul>
                    <div className="card-body">
                        <button className='btnDel' onClick={() => confirmDelete(item.id)}>Delete</button>
                    </div>
                    </div>
                    ))}

            </div>
        </div>


        {/* <table className="table">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

                {data.map((item) => (
                    <tr key={item.id}>
                        <th scope="row"> {item.id} </th>
                        <td><Link style={{textDecoration: 'none'}} to = {`/detail/${item.id}`}>
                            {item.name}
                        </Link></td>
                        <td>{item.domain}</td>
                        <td>
                            <button className='btnDel' onClick={() => confirmDelete(item.id)}>Delete</button>
                            <button className='btnEdit' onClick={() => editData(item.id)}>Edit</button>
                            </td>
                    </tr>
                ))}
                
            </tbody>
        </table>  */}
        </>
    );
}






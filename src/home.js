import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdPersonAdd } from "react-icons/io";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    alert('Deleted');
    setData((prevUsers) => prevUsers.filter((data) => data.id !== id));
  };
  

  return (
    <div  className="container mt-4">
      <h1>List of Users</h1>
      <div className='d-flex justify-content-end'>
        <Link to ='/create' ><IoMdPersonAdd/></Link></div>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginLeft: '50px' }} className='table table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {
            data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
                <td>
                    <button style={{
                    marginRight: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'green',
                    fontSize: '18px'
                  }}>
                    <CiRead />
                  </button>
                  <button style={{
                    marginRight: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'green',
                    fontSize: '18px'
                  }}>
                    <CiEdit />
                  </button>
                  <button
                  onClick={() => deleteUser(item.id)} 
                   
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'red',
                    fontSize: '18px'
                  }}>
                    <MdOutlineDeleteOutline />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home

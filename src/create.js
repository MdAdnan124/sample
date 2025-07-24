import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    phone: '',
    website: '',
    company: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/users', values)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Add a user</h1>
      <form style={{ margin: '20px' }} onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            style={{ margin: '20px' }}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            style={{ margin: '20px' }}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            style={{ margin: '20px' }}
          />
        </div>
        <div>
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={(e) => setValues({ ...values, website: e.target.value })}
            style={{ margin: '20px' }}
          />
        </div>
        <div>
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            style={{ margin: '20px' }}
          />
        </div>
        <button type="submit" style={{ marginRight: '20px' }}>
          Submit
        </button>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
    
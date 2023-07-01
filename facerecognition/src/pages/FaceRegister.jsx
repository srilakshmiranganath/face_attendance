import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const FaceRegister = () => {
    const [classID, setClassID] = useState('');
    const [studentName, setStudentName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      classID,
      studentName,
    };

    fetch('/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
        <>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="classID">Class ID</label>
            <input value={classID} onChange={(e) => setClassID(e.target.value)} placeholder="Class ID" id="email" name="sem" className="input" />
            <label htmlFor="studentName">Name</label>
            <input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Name" id="studentName" name="studentName" className="input" />
            <label>Face</label>
            <Link to="/register">
                <button className='btn'>CAPTURE FACE</button>
            </Link>
            <button type="submit" className='btn'>Register</button>
            <Link to="/">
            <button className='btn'>HOME</button>
            </Link>
        </form>
        </>
    )
}

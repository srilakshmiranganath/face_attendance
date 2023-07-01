import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Addclass = () => {
    const [classID, setClassID] = useState('');
    const [course, setCourse] = useState('');
    const [sem, setSem] = useState('');
    const [batch, setBatch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          classID,
          course,
          sem,
          batch,
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
        <form className="add-class-form" onSubmit={handleSubmit}>
            <input value={classID} onChange={(e) => setClassID(e.target.value)} placeholder="Class ID" id="class_id" name="class_id" className="input" />
            <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" id="course" name="course" className="input" />
            <input value={sem} onChange={(e) => setSem(e.target.value)} placeholder="Semester" id="sem" name="sem" className="input" />
            <input value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="Batch(Eg A/B/C/None)" id="batch" name="batch" className="input" />
            <button type="submit" className='btn'>ADD</button>
            <Link to="/">
            <button className='btn'>HOME</button>
            </Link>
        </form>
    )
}
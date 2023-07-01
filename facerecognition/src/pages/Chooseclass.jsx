import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Chooseclass = () => {
    const [classID, setClassID] = useState('');
    const [date, setDate] = useState('');
    const [subjectID, setSubjectID] = useState('');
    const [hour, setHour] = useState('');

    return (
        <form className="attendance-form">
            <label htmlFor="classID">Class ID</label>
            <input value={classID} onChange={(e) => setClassID(e.target.value)} placeholder="Class ID" id="class" name="class" className="input" />
            <label htmlFor="date">Date</label>
            <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" id="date" name="date" className="input" />
            <label htmlFor="subject_id">Subject ID</label>
            <input value={subjectID} onChange={(e) => setSubjectID(e.target.value)} placeholder="Subject ID" id="subject_id" name="subject_id" className="input" />
            <label htmlFor="hour">Hour</label>
            <input value={hour} onChange={(e) => setHour(e.target.value)} placeholder="Hour" id="hour" name="hour" className="input" />

            <Link to="/attendance">
                <button>TAKE ATTENDANCE</button>
            </Link>
            <Link to="/">
                <button className='btn'>HOME</button>
            </Link>
        </form>
    )
}
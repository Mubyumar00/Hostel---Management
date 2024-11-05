import React from "react";


const StudentReg = () => {
  return (
    <div>
    <div className="container form__ --100vh">
      <div className="form-container">
      <p className="title">Register a new student</p>
      <form className="form">
        <div className="--dir-column">
          <label htmlFor="fullname">Student's Name:</label>
          <input
            type="text"
            className="input"
            name="fullname"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="input"
            name="age"
            placeholder="Enter age"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="text">Room Number:</label>
          <input
            type="text"
            className="input"
            name="text"
            placeholder="Enter room number"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="password">Contact Email:</label>
          <input
            type="text"
            className="input"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="password">Guardian's Name:</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Enter name"
            required
          />
        </div>
        
        <button className="--btn" >
          Signing you up...  Create Account
        </button>
      </form>

      <p className="account">
        Already have an account? Login
      </p>
      </div>
    </div>
  
    </div>
  )
}

export default StudentReg
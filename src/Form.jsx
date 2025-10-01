import React, { useState } from 'react'
import "./form.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Form() {

  const [values, setValues]  = useState({
    firstname: "",
    lastname:"",
    phno: "",
    emailid: "",
    gender: "",
    subject: "",


  })

  const handleChanges =(e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  const handlesubmit = () => {
  const { firstname, lastname, phno, emailid, gender, subject } = values;

  if (!firstname || !lastname || !phno || !emailid || !gender || !subject || subject === "Select") {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const message = `
    First Name: ${firstname}
    Last Name: ${lastname}
    Phone No: ${phno}
    Email ID: ${emailid}
    Gender: ${gender}
    Course: ${subject}
  `;
  alert("Form Submitted Successfully!\n" + message);
};


  const reset= () => {
    setValues({firstname:'', lastname: '', phno: '', emailid:'', gender:'',subject:''})
  }

  return (
    <>
        <h1 className='heading'> Form Using React</h1>

        <div className='container'>
        <div className='container-form'>
          <label>First Name : </label>
          <input type='text' placeholder='First Name' name='firstname'
            onChange={(e)=> handleChanges(e)} value={values.firstname}
          />
        </div>

        <div className='container-form'>
          <label>Last Name : </label>
          <input type='text' placeholder='Last Name' name='lastname'
            onChange={(e)=> handleChanges(e)}  value={values.lastname}
          />
        </div>

        <div className='container-form'>
          <label>Phn no : </label>
          <input type='text' placeholder='phone no' name='phno'
            onChange={(e)=> handleChanges(e)}  value={values.phno}
          />
        </div>
       
       <div className='container-form'>
          <label>Email id : </label>
          <input type='email' placeholder='Email id' name='emailid'
            onChange={(e)=> handleChanges(e)}  value={values.emailid}
          />
        </div>

        <div>
          <label>Gender: </label>
          <input type='radio' name='gender' value={'male'}  onChange={(e)=> handleChanges(e)}   /> Male
          <input type='radio' name='gender' value={'female'} onChange={(e)=> handleChanges(e)}  /> Female
          <input type='radio' name='gender' value={'other'} onChange={(e)=> handleChanges(e)} /> Other
        </div>
<br></br>

        <div className='container-form'>
          <label>Course : </label>
          <select name='subject' id='subject' onChange={(e)=> handleChanges(e)}  required value={values.subject}>
            <option>Select</option>
            <option>Mearn Full Stack</option>
            <option>Python Full Stack</option>
            <option>Tester</option>
          </select>
        </div>


        <Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={reset}>Reset</Button>
      <Button variant="contained" onClick={handlesubmit}>Submit</Button>
    </Stack>




        </div>
        
    </>
  )
}

export default Form
import React, { useState } from 'react'
import './App.css'
import startimg from '../src/assets/firstimg.png'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Stack } from '@mui/material'


function App() {
  
  // fullname valid
  const [fullName, setfullName] = useState("'")
  const [address, setaddress] = useState("")
  const [mobNum, setmobNum] = useState("")
  const [emailId, setemailId] = useState("")

  // invalid
  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false)
  const [isAddressInvalid, setIsAddressInvalid] = useState(false)
  const [isMobileNumberInvalid, setIsmobileNumberInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)

  // name part
  const handleInputValidationforname = (tag) => {
    const { name, value } = tag
    console.log(!!value.match(/^[A-Za-z\s.]*$/))
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      // valid
      if (name == "fullName") {
        setfullName(value)
        setIsFullnameInvalid(false)
      }
    } else {
      // invalid
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(true)
      }
    }
  }

  // gender
  const [gender, setGender] = useState("")     //to store selected gender

  const handleGenderChange = (event) => {
    setGender(event.target.value) // Update state when gender is selected
  }

  // address
  const handleInputValidationforaddress = (tag) => {
    const { name, value } = tag
    console.log(!!value.match(/^[A-Za-z\d\s,]*$/))
    if (!!value.match(/^[A-Za-z\d\s,()]*$/)) {
      // valid
      if (name == "address") {
        setaddress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name == "address") {
        setaddress(value);
        setIsAddressInvalid(true);
      }
    }
  }


  // mob no.
  const handleInputValidationfornumber = (tag) => {
    const { name, value } = tag
    console.log(!!value.match(/^\d{10,}$/))
    if (!!value.match(/^\d{10,}$/)) {
      if (name == "mobNum") {
        setmobNum(value)
        setIsmobileNumberInvalid(false)
      }
    } else {
      if (name == "mobNum") {
        setmobNum(value)
        setIsmobileNumberInvalid(true)
      }
    }
  }

  // mail id
  const handleInputValidationformail = (tag) => {
    const { name, value } = tag
    console.log(!!value.match(/^[a-z\d\@.]*$/))
    if (!!value.match(/^[a-z\d\@.]*$/)) {
      // valid
      if (name == "emailId") {
        setemailId(value)
        setIsEmailInvalid(false)
      }
    } else {
      // invalid
      if (name == "emailId") {
        setemailId(value)
        setIsEmailInvalid(true)
      }
    }
  }


  // date
  const [selectedDate, setSelectedDate] = useState(null)   // to store selected date

  const handleDateChange = (date) => {
    setSelectedDate(date) // Update state when date is selected
  }


  // course
  const [Course, setCourse] = useState("")
  const handleCourseChange = (event) => {
    setCourse(event.target.value)        // Update state when course is selected
  }

  const DetailsUpload = () => {
    alert("Upload Completed !!")
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleReset = () => {
    setCourse("")
    setGender("")
    setSelectedDate(null)
    setfullName("")
    setIsFullnameInvalid(false)
    setaddress("")
    setIsAddressInvalid(false)
    setmobNum("")
    setIsmobileNumberInvalid(false)
    setemailId("")
    setIsEmailInvalid(false)
  }

  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark p-5'>
      <div style={{width:'800px'}} className="bg-info p-3 rounded">
        <div className='top'>
          <img style={{width:'200px'}} src={startimg} alt="" />
          <h2 className='head' style={{color:'crimson'}}>Amrita Online Admissions Portal</h2>
        </div>
        <div>
          <h3 className='mt-5 text-center' style={{color:'grey'}}>STUDENT REGISTRATION FORM</h3>
        </div>
        <form className='mt-5 ms-4 p-3'>
          {/* name */}
          <div className="mb-4">
           <TextField name="fullName" value={fullName} onChange={(e) => handleInputValidationforname(e.target)} className="w-100" id="fullName" label="Full Name" variant="outlined" />
          </div>
          {isFullnameInvalid && (
            <div className="mb-3 text-danger fw-bolder">Invalid Name !!</div>
          )}

          {/* gender */}
          <div className="mb-4">
            <h5>Gender</h5>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
              <RadioGroup  value={gender} onChange={handleGenderChange} row aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* address */}
          <div className="mb-4">
           <TextField  name="address" value={address} onChange={(e) => handleInputValidationforaddress(e.target)} className="w-100" id="outlined-basic" label="Address" variant="outlined" />
          </div>
          {isAddressInvalid && (
              <div className="mb-3 text-danger fw-bolder">Invalid Address !!</div>
          )}

          {/* mob no. */}
          <div className="mb-4">
           <TextField name="mobNum" value={mobNum} onChange={(e) => handleInputValidationfornumber(e.target)} className="w-100" id="outlined-basic" label="Contact No." variant="outlined" />
          </div>
          {isMobileNumberInvalid && (
            <div className="mb-3 text-danger fw-bolder">Invalid Contact No. !!</div>
          )}

          {/* mail id */}
          <div className="mb-4">
            <TextField name="emailId" value={emailId} onChange={(e) => handleInputValidationformail(e.target)} className="w-100" id="outlined-basic" label="Email Id" variant="outlined" />
          </div>
          {isEmailInvalid && (
            <div className="mb-3 text-danger fw-bolder">Invalid Email!!</div>
          )}
        </form>
        <form className='secondpart p-3'>
          {/* date */}
          <div className='ms-4'>
           <h5>Date of Birth</h5>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DatePicker value={selectedDate} onChange={handleDateChange} className=" w-100"  renderInput={(props) => <input {...props} readOnly />}/>
           </LocalizationProvider>
          </div>
         {/* course */}
         <div className='mt-5 ms-4'>
           <FormControl className='w-100'>
             <InputLabel id="demo-multiple-name-label">Course</InputLabel>
             <Select  value={Course} onChange={handleCourseChange} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" 
                autoWidth label="Course">
               <MenuItem value={10}>Biology</MenuItem>
               <MenuItem value={11}>Computer Science</MenuItem>
               <MenuItem value={12}>Commerce</MenuItem>
             </Select>
           </FormControl>
          </div>
          {/* buttons */}
          <Stack direction="column" spacing={2} className="mt-3">
            <Button disabled={isAddressInvalid || isEmailInvalid || isFullnameInvalid || isMobileNumberInvalid} className="rounded-5 p-2 fw-bolder ms-3 mt-4"  type="submit" onClick={handleShow} variant="success" size="lg">Register</Button>
            <Button className="bg-danger rounded-5 p-2 fw-bolder ms-3 mt-4"  onClick={handleReset}  size="lg">RESET</Button>
         </Stack>
        </form>
      </div>

      {/* modal */}
      <div className="modal show" >
      <Modal className='bg-warning' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Data Saved Successfully !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="Details">
           <div className="Heading">
              <h5 className="fullname">Full Name : {fullName} </h5>
              <h5 className="fullname">Gender : {gender} </h5>
              <h5 className="fullname">Address : {address}</h5>
              <h5 className="fullname">Contact No. : {mobNum}</h5>
              <h5 className="fullname">Email : {emailId} </h5>
              <h5 className="fullname">Date of Birth : {selectedDate ? selectedDate.format("DD-MM-YYYY") : ""}</h5>
              <h5 className="fullname">Course : {Course === 10
                 ? "Biology"
                 : Course === 11
                 ? "Computer Science"
                 : Course === 12
                 ? "Commerce"
                : ""}</h5>
           </div>
         </div>
       </Modal.Body>
       <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Edit</Button>
          <Button onClick={() => {
            handleClose();
            handleReset();
            DetailsUpload();
            }} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
   </div>
    
  )
}

export default App

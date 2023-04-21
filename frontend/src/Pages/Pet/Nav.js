import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
  
    <div class="sidenav">
      <Link to='medicalHistory'>MedicalHistory</Link>
      <Link to="vaccination">Vaccination</Link>
      <Link to="allergies">Allergies</Link>
      <Link to="records">Records</Link>
      <Link to="room">Room</Link>
      <Link to="doctors">Doctors</Link>
    </div>
  )
}

export default Nav
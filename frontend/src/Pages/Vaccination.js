import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Vaccination() {
  const {pet}=useOutletContext()
  const petMedicalHistory=pet.vaccination
  return (
    <div>
    <Button variant="contained">Add Vaccination</Button>
    <Card />
  </div>
  )
}

export default Vaccination
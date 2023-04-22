import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Allergies() {
  const {pet}=useOutletContext()
  const petMedicalHistory=pet.Allergies
  return (
    <div>
    <Button variant="contained">Add Allergy</Button>
    <Card />
  </div>
  )
}

export default Allergies
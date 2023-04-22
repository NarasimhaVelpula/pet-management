import { Button } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'

function MedicalHistory() {
  const {pet}=useOutletContext()
  const petMedicalHistory=pet.MedicalHistory
  return (
    <div>
      <Button variant="contained">Add Medical History</Button>
      <Card />
    </div>
  )
}

export default MedicalHistory
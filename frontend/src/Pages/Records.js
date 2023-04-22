import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Records() {
  const {pet}=useOutletContext()
  const petMedicalHistory=pet.records
  return (
    <div>
    <Button variant="contained">Add Record</Button>
    <Card />
  </div>
  )
}

export default Records
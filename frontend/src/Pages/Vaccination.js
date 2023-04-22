import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Vaccination() {
  const { pet } = useOutletContext()
  //console.log("pet", pet)
  const petVaccination = pet.vaccination
  console.log("vaccination", petVaccination.length)
  return (
    <div>
      <Button variant="contained">Add Vaccination</Button>
      {
        petVaccination.length !== 0 ? petVaccination.map(vaccination => (<Card cardContent={vaccination} />)) : <div>No Data Available</div>
      }
    </div>
  )
}

export default Vaccination
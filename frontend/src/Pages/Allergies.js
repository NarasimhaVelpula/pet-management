import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Allergies() {
  const { pet } = useOutletContext()
  const petAllergies = pet.allergies
  return (
    <div>
      <Button variant="contained">Add Allergy</Button>
      {
        petAllergies.length !== 0 ? petAllergies.map(allergy => (<Card cardContent={allergy} />)) : <div>No Data Available</div>
      }
    </div>
  )
}

export default Allergies
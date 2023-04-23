import { Button } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'

function MedicalHistory() {
  const { pet } = useOutletContext()
  const petMedicalHistory = pet.medicalHistory
  return (
    <div>
      <Button variant="contained">Add Medical History</Button>
      {
        petMedicalHistory.length !== 0 ? petMedicalHistory.map(history => (<Card cardContent={history} />)) : <div>No Data Available</div>
      }
    </div>
  )
}

export default MedicalHistory
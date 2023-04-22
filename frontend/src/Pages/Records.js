import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'

function Records() {
  const { pet } = useOutletContext()
  const petRecords = pet.records
  return (
    <div>
      <Button variant="contained">Add Record</Button>
      {
        petRecords.length !== 0 ? petRecords.map(record => (<Card cardContent={record} />)) : <div>No Data Available</div>
      }
    </div>
  )
}

export default Records
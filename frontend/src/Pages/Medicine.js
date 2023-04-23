import { Button } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import Modal from './../Components/Modal';

import axios from '../axios';

function Medicine() {
  const { pet } = useOutletContext()
  const [errorMessage, seterrorMessage] = React.useState("")
  const petMedicine = pet.medicine
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };
  const schema = [
    {
      name: "name",
      type: "text",
      DisplayName: "Medicine Name"
    },
    {
      name: "quantity",
      type: "text",
      DisplayName: "Quantity"
    },
    {
        name: "price",
        type: "Number",
        DisplayName: "Price"
    }
  ]
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const data = new FormData(event.currentTarget);
    const payload = {}

    schema.map(obj => {
      payload[obj.name] = data.get(obj.name)
    })
    console.log(payload)
    console.log(pet._id)
    axios.post(`pet/medicine`, { ...payload, id: pet._id })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("Failed to create")
      })

  }
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Medicine</Button>
      {
        petMedicine.length !== 0 ? petMedicine.map(history => (<Card cardContent={history}  petId={pet._id} endpoint="medicine" />)) : <div>No Data Available</div>
      }
      <Modal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        schema={schema}
        errorMessage={errorMessage}
        loading={loading}
      >

      </Modal>
    </div>
  )
}

export default Medicine
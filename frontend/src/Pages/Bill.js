import { Button } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import Modal from './../Components/Modal';

import axios from '../axios';

function Bill() {
  const { pet } = useOutletContext()
  const [errorMessage, seterrorMessage] = React.useState("")
  const petBill = pet.bill
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };
  const schema = [
    {
      name: "medicineCharges",
      type: "text",
      DisplayName: "Medicine Changes"
    },
    {
      name: "roomCharges",
      type: "text",
      DisplayName: "Room Charges"
    },
    {
        name: "docCharges",
        type: "Number",
        DisplayName: "Doc Charges"
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
    axios.post(`pet/bill`, { ...payload, id: pet._id })
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
      <Button variant="contained" onClick={handleOpen}>Add Bills</Button>
      {
        petBill.length !== 0 ? petBill.map(history => (<Card cardContent={history}  petId={pet._id} endpoint="bill" schema={schema} propertyID={{ "bill_no": history._id }}/>)) : <div>No Data Available</div>
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

export default Bill
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'
import Modal from './../Components/Modal';
import axios from '../axios';

function Vaccination() {
  const { pet } = useOutletContext()
  //console.log("pet", pet)
  const petVaccination = pet.vaccination
  const [errorMessage, seterrorMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [finalPayload, setFinalPayload] = React.useState({})
  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };

  const setPayload = (key, value) => {
    console.log(key, value)
    setFinalPayload({ ...finalPayload, [key]: value })
  }

  const schema = [
    {
      name: "vaccinationName",
      type: "text",
      DisplayName: "Vaccination Name"
    },
    {
      name: "vaccinationDate",
      type: "date",
      DisplayName: "Vaccination Date"
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const data = new FormData(event.currentTarget);
    const payload = {}
    for (const key of data.keys()) {
      console.log(key);
    }
    schema.map(obj => {
      payload[obj.name] = data.get(obj.name)
    })
    console.log(payload)
    console.log(finalPayload)
    //setFinalPayload({ ...payload, ...finalPayload })
    axios.post(`pet/vaccination`, { ...payload, ...finalPayload, id: pet._id })
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
      <Button variant="contained" onClick={handleOpen}>Add Vaccination</Button>
      {
        petVaccination.length !== 0 ? petVaccination.map(vaccination => (<Card cardContent={vaccination} petId={pet._id} endpoint="vaccination" />)) : <div>No Data Available</div>
      }
      <Modal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        schema={schema}
        errorMessage={errorMessage}
        loading={loading}
        setFinalPayload={setPayload}
      ></Modal>
    </div>
  )
}

export default Vaccination
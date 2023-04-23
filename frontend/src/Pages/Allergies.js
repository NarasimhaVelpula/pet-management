import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'
import Modal from './../Components/Modal';
import axios from '../axios';

function Allergies() {
  const { pet } = useOutletContext()
  const petAllergies = pet.allergies
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
    axios.post(`pet/allergy`, { ...payload, ...finalPayload, id: pet._id })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("Failed to create")
      })

  }

  const schema = [
    {
      name: "allergyName",
      type: "text",
      DisplayName: "Allergy Name"
    },
    {
      name: "dateEffected",
      type: "date",
      DisplayName: "Date Effected"
    },
    {
      name: "severity",
      type: "select",
      DisplayName: "Severity",
      options: ["Low", "Medium", "High"]
    }
  ]

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Allergy</Button>
      {
        petAllergies.length !== 0 ? petAllergies.map(allergy => (<Card cardContent={allergy} />)) : <div>No Data Available</div>
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

export default Allergies
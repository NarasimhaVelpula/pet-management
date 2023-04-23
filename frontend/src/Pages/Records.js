import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import { Button } from '@mui/material'
import Modal from './../Components/Modal';
import axios from '../axios';

function Records() {
  const { pet } = useOutletContext()
  const petRecords = pet.records

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
    axios.post(`pet/record`, { ...payload, ...finalPayload, id: pet._id })
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
      name: "recordName",
      type: "text",
      DisplayName: "Record Name"
    },
    {
      name: "admitDate",
      type: "date",
      DisplayName: "Admit Date"
    },
    {
      name: "dischargeDate",
      type: "date",
      DisplayName: "Discharge Date",
    }
  ]

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Record</Button>
      {
        petRecords.length !== 0 ? petRecords.map(record => (<Card cardContent={record} />)) : <div>No Data Available</div>
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

export default Records
import { Button } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Card'
import Modal from './../Components/Modal';

import axios from '../axios';

function RoomHistory() {
  const { pet } = useOutletContext()
  const [errorMessage, seterrorMessage] = React.useState("")
  const petRoomHistory = pet.rooms
  //console.log("petroon  "+petRoomHistory)
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };
  const schema = [
    {
      name: "roomType",
      type: "text",
      DisplayName: "Room Type"
    },
    {
      name: "roomNo",
      type: "text",
      DisplayName: "Room Number"
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
    axios.post(`pet/room`, { ...payload, id: pet._id })
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
      <Button variant="contained" onClick={handleOpen}>Add Room </Button>
      {
        petRoomHistory.length !== 0 ? petRoomHistory.map(history => (<Card cardContent={history} petId={pet._id} endpoint="room" schema={schema} propertyID={{ "roomId": history._id }}  />)) : <div>No Data Available</div>
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

export default RoomHistory
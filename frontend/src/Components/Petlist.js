import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, ListItemAvatar } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from '../axios'
import UpdateModal from "./UpdateModal"


import Modal from './../Components/Modal';

export default function PetList() {

  const { pets } = useOutletContext()
  console.log(pets)
  const navigate = useNavigate();
  const handleListItemClick = (event, index) => {
    navigate(`/pet/${index}`);
  };

  const [errorMessage, seterrorMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false)
  const [pet, setPet] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleOpen1 = (ind) => {
    console.log("ind", ind)
    setPet(ind)
    setOpen1(true)
  }
  const [finalPayload, setFinalPayload] = React.useState({})
  const handleDelete = (id) => {
    axios.delete('/pet', { data: { id } })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };

  const schema = [
    {
      name: "name",
      type: "text",
      DisplayName: "PET NAME"
    },
    {
      name: "breed",
      type: "text",
      DisplayName: "Breed"
    },
    {
      name: "medicalCondition",
      type: "select",
      DisplayName: "Medical Condition",
      options: ["Diagnosed", "Undiagnosed"]
    }

  ]

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
    //setFinalPayload({ ...payload, ...finalPayload })
    axios.post(`pet/`, { ...payload, ...finalPayload })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("Failed to create")
      })

  }

  const handleUpdateSubmit = async (payload) => {
    axios.put(`pet/`, { ...payload, id: pets[pet]._id })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("Failed to create")
      })
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Button variant="contained" onClick={handleOpen} sx={{ margin: 2 }}>Add Your PET</Button>
      {pets.length !== 0 ? <><List component="nav" aria-label="main mailbox folders">
        {pets.map((pet, ind) => (
          <div style={{ border: "1px solid black", margin: "10px" }}>
            <ListItemButton
              onClick={(event) => handleListItemClick(event, pet._id)}

            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1188690130/photo/angry-border-collie-dog-expression-face-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=JBHeFybW8F1a1mQuF5Zxd8DT8n7aYwTvsOcgeGFkyrw="
                />
              </ListItemAvatar>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>Name: <ListItemText primary={pet.name} style={{ marginLeft: "10px" }} /></div>
                <div style={{ display: "flex" }}> Breed: <ListItemText primary={pet.breed} style={{ marginLeft: "10px" }} /></div>
                <div style={{ display: "flex" }}> Medical Condition: <ListItemText primary={pet.medicalCondition} style={{ marginLeft: "10px" }} /></div>
              </div>

            </ListItemButton>
            <div>
              <Button
                variant="contained"
                style={{ margin: '10px' }}
                onClick={(event) => {
                  event.stopPropagation()
                  handleOpen1(ind)
                }}>Update</Button>
              <Button
                variant="contained"
                style={{ margin: '10px' }}
                onClick={(event) => {
                  event.stopPropagation()
                  handleDelete(pet._id)
                }}>Delete</Button>
            </div>
          </div>
        ))}
      </List>
        <UpdateModal open={open1} setOpen={setOpen1} mainObj={pets[pet]} handleFinalSubmit={handleUpdateSubmit} schema={schema} />
      </> : <div>No Pets found</div>
      }
      <Modal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        schema={schema}
        errorMessage={errorMessage}
        loading={loading}
        setFinalPayload={setPayload}
      />
    </Box>
  );
}

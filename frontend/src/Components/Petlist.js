import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, ListItemAvatar } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from '../axios'


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
  const handleOpen = () => setOpen(true);
  const [finalPayload, setFinalPayload] = React.useState({})
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
    setFinalPayload(...payload, ...finalPayload)
    axios.post(`pet/`, { ...finalPayload })
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
      <List component="nav" aria-label="main mailbox folders">
        {pets.map((pet) => (
          <ListItemButton
            onClick={(event) => handleListItemClick(event, pet._id)}
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://media.istockphoto.com/id/1188690130/photo/angry-border-collie-dog-expression-face-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=JBHeFybW8F1a1mQuF5Zxd8DT8n7aYwTvsOcgeGFkyrw="
              />
            </ListItemAvatar>
            <ListItemText primary={pet.name} />
            <ListItemText primary={pet.breed} />
            <ListItemText primary={pet.medicalCondition} />
          </ListItemButton>
        ))}
      </List>
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

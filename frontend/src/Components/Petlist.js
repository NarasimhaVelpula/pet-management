import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Avatar, ListItemAvatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PetList(props) {
  console.log(props);
  const pets = [];
  const navigate = useNavigate();
  const handleListItemClick = (event, index) => {
    navigate(`/pet/${index}`);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
        <ListItemButton onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1188690130/photo/angry-border-collie-dog-expression-face-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=JBHeFybW8F1a1mQuF5Zxd8DT8n7aYwTvsOcgeGFkyrw="
            />
          </ListItemAvatar>
          <ListItemText primary="Kin" />
        </ListItemButton>
        <ListItemButton onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1197275895/photo/close-up-attentive-border-collie-dog-with-ears-up-and-looking-up-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=cgSSEuEciBNasAop_681kSgtXgYDV2wDFCLqB7lzIxg="
            />
          </ListItemAvatar>
          <ListItemText primary="Jim" />
        </ListItemButton>
      </List>
    </Box>
  );
}

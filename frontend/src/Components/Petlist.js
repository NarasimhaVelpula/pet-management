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
import { useNavigate, useOutletContext } from "react-router-dom";

export default function PetList() {
  
  const {pets}=useOutletContext()
  console.log(pets)
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
      </List>
    </Box>
  );
}

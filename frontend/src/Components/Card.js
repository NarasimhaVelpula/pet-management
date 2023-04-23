import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from './../axios';
import UpdateModal from './UpdateModal'



export default function OutlinedCard(props) {
  console.log(props)
  const { cardContent, petId, endpoint, schema, propertyID } = props
  //console.log("cardContent", cardContent)
  console.log("petId", petId)
  let headers = Object.keys(cardContent)
  console.log("headers", headers)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  const [errorMessage, seterrorMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const handleDelete = () => {
    axios.delete(`pet/${endpoint}`, { data: { id: petId, medHisId: cardContent._id } })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        console.log("failed")
      })
  }

  const handleUpdate = (payload) => {
    axios.put(`pet/${endpoint}`, { ...payload, id: petId, ...propertyID })
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("Failed to create")
      })
  }
  return (
    <>
      <Box sx={{ minWidth: 275, maxWidth: 300, marginTop: 10 }}>
        <Card variant="outlined">
          <CardContent>
            {
              headers.map(header => (<Typography sx={{ fontSize: 14 }} variant="h5" component="div" gutterBottom>

                {String(header).startsWith("_id") ? "" : header} {String(header).startsWith("_id") ? "" : ":"} {String(header).startsWith("_id") ? "" : String(cardContent[header])}
              </Typography>))
            }

          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpen}>Update</Button>
            <Button size="small" onClick={handleDelete}>Delete</Button>
          </CardActions>
        </Card>
      </Box>
      <UpdateModal open={open} setOpen={setOpen} mainObj={cardContent} handleFinalSubmit={handleUpdate} schema={schema} />
    </>
  );
}
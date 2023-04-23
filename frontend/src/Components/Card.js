import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function OutlinedCard({ cardContent, endpoint }) {
  //console.log("cardContent", cardContent)
  let headers = Object.keys(cardContent)
  console.log("headers", headers)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          </CardActions>
        </Card>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
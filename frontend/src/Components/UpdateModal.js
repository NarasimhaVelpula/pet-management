import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@mui/material';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { InsertInvitation } from '@mui/icons-material';


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

export default function TransitionsModal({ open, setOpen, mainObj, handleFinalSubmit, schema }) {
  const [errorMessage, seterrorMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  let intialPaylod = {}
  const [finalPayload, setFinalPayload] = React.useState(intialPaylod)
  React.useEffect(() => {
    intialPaylod = {}
    schema.map(obj => {
      intialPaylod[obj.name] = mainObj[obj.name]
    })
    setFinalPayload(intialPaylod)
    console.log("inside useeffect")
  }, [mainObj])


  const handleClose = () => {
    setOpen(false)
    seterrorMessage("")
  };

  const handleChange = (key, value) => {
    setFinalPayload({ ...finalPayload, [key]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    await handleFinalSubmit(finalPayload)
    seterrorMessage("failed")
    setLoading(false)
  }

  console.log("mainObj", mainObj)
  return (
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
            Enter PET Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {
              schema.map(obj => {
                console.log(obj.name, mainObj[obj.name])
                if (obj.type === "select") {
                  return (
                    <FormControl fullWidth variant="standard">
                      <InputLabel id={obj.name}
                        variant="standard" htmlFor="uncontrolled-native"
                      >{obj.DisplayName}</InputLabel>
                      <Select
                        labelId={obj.name}
                        id={obj.name}
                        value={finalPayload[obj.name]}
                        inputProps={{
                          name: obj.name,
                          id: 'uncontrolled-native',
                        }}
                        label={obj.DisplayName}
                        onChange={(event) => { handleChange(obj.name, event.target.value) }}

                      >
                        {obj.options.map(option => (
                          <MenuItem value={option}>{option}</MenuItem >
                        ))}
                      </Select>
                    </FormControl>
                  )
                }

                if (obj.type === "date") {
                  return (
                    <>
                      <label>{obj.DisplayName}</label>
                      <DatePicker
                        selected={finalPayload[obj.name]}
                        onChange={(value) => {
                          handleChange(obj.name, value.toISOString())
                        }}
                      />
                    </>
                  )
                }

                return (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    variant="standard"
                    id={obj.name}
                    label={obj.DisplayName}
                    name={obj.name}
                    value={finalPayload[obj.name]}
                    onChange={(event) => { handleChange(obj.name, event.target.value) }}

                  />
                )
              }

              )
            }
            <span>{errorMessage}</span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
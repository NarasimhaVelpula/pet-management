import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


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

export default function TransitionsModal({ open, handleClose, handleSubmit, schema, errorMessage, loading, setFinalPayload }) {
  const [startDate, setStartDate] = React.useState();

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

                if (obj.type === "select") {
                  return (
                    <FormControl fullWidth variant="standard">
                      <InputLabel id={obj.name}
                        variant="standard" htmlFor="uncontrolled-native"
                      >{obj.DisplayName}</InputLabel>
                      <NativeSelect
                        labelId={obj.name}
                        id={obj.name}
                        inputProps={{
                          name: obj.name,
                          id: 'uncontrolled-native',
                        }}
                        label={obj.DisplayName}

                      >
                        {obj.options.map(option => (
                          <option value={option}>{option}</option >
                        ))}
                      </NativeSelect>
                    </FormControl>
                  )
                }

                if (obj.type === "date") {
                  return (
                    <>
                      <label>{obj.DisplayName}</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(value) => {
                          setStartDate(value)
                          setFinalPayload(obj.name, value.toISOString())
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
              Create
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
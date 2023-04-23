import axios from './../axios'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function Insurance() {
  const [insurance, setinsurance] = React.useState({})
  const [initialLoading, setinitialLoading] = React.useState(false)
  const [errorMessage, seterrorMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    axios.get('owner/insurance')
      .then(res => {
        const { data } = res
        setinsurance(data)
        setinitialLoading(true)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const handleChange = (key, value) => {
    console.log("handleChange")
    setinsurance({ ...insurance, [key]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    axios.post('owner/insurance', insurance)
      .then(res => {
        const { data } = res
        setinsurance(data)
        setLoading(false)
        window.location.reload(false)
      })
      .catch(err => {
        setLoading(false)
        seterrorMessage("failed")
      })
  }
  return (
    <>
      {console.log(insurance)}
      {
        initialLoading ? <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Insurance Details
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="insuranceName"
                      name="insuranceName"
                      required
                      fullWidth
                      id="insuranceName"
                      value={insurance.InsuranceName}
                      label="Insurance Name"
                      autoFocus
                      onChange={(event) => { handleChange("InsuranceName", event.target.value) }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="insuranceDetails"
                      label="Insurance Details"
                      value={insurance.InsuranceDetails}
                      type="text"
                      id="insuranceDetails"
                      autoComplete="insurance-details"
                      multiline
                      onChange={(event) => { handleChange("InsuranceDetails", event.target.value) }}
                    />
                  </Grid>


                </Grid>
                <p style={{ color: 'red' }}>{errorMessage}</p>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>

                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Container>
        </ThemeProvider> : <div>Loading...</div>
      }
    </>
  )
}

export default Insurance
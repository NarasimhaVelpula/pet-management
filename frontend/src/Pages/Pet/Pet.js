import React from "react";
import Nav from "./Nav";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import axios from "../../axios";
import "./Pet.css";

function PET() {

  const [loading, setLoading] = React.useState(true);
  const [pet, setPet] = React.useState();
  const {petId}=useParams()
  React.useEffect(() => {
    axios.get(`/pet/${petId}`).then((payload) => {
      const { data } = payload;
      setPet(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="dashboard">
      <Nav />
      <Container className="content">
      {loading ? <>Loading....</> : <Outlet context={{pet}} />}
      </Container>
    </div>
  );
}

export default PET;

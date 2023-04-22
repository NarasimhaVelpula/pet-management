import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import "./Pet.css";

function PET() {
  return (
    <div className="dashboard">
      <Nav />
      <Container className="content"className="content">
        <Outlet />
      </Container>
    </div>
  );
}

export default PET;

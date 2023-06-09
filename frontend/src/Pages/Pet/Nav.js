import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
function Nav() {
  return (
    <div class="sidenav">
      <Link to="medicalHistory">
        <DoubleArrowIcon />
        MedicalHistory
      </Link>
      <Link to="medicine">
        <DoubleArrowIcon />
        Medicine
      </Link>
      <Link to="postcare">
        <DoubleArrowIcon />
        Post Care
      </Link>
      <Link to="vaccination">
        <DoubleArrowIcon />
        Vaccination
      </Link>
      <Link to="allergies">
        <DoubleArrowIcon />
        Allergies
      </Link>
      <Link to="records">
        <DoubleArrowIcon />
        Records
      </Link>
      <Link to="room">
        <DoubleArrowIcon />
        Room
      </Link>
      <Link to="bill">
        <DoubleArrowIcon />
        Bill
      </Link>
    </div>
  );
}

export default Nav;

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import PetList from "../Components/Petlist";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Pet from "./Pet/Pet";
import axios from "../axios";

function Home() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios.get("/pet").then((payload) => {
      const { data } = payload;
      setPets(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Header />
      {loading ? <>Loading....</> : <Outlet pets={pets} />}
    </div>
  );
}

export default Home;

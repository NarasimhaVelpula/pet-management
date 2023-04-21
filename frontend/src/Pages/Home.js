import React from 'react'
import Header from '../Components/Header'
import PetList from '../Components/Petlist'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Pet from './Pet/Pet'

function Home() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Home
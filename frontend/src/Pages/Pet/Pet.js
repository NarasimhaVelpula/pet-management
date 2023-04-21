import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function PET() {
  return (
    <>
    <Nav />
    <Container>
    <Outlet />
    </Container>
    </>
  )
}

export default PET
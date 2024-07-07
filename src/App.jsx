/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

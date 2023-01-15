import React from 'react';
import { Outlet } from "react-router-dom";

import NavBar from '../../components/navbar';

const ExternalLayouts = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default ExternalLayouts;
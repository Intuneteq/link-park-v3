import React from 'react';
import { Outlet } from "react-router-dom";

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const ExternalLayouts = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default ExternalLayouts;
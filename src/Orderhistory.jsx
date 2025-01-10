import React, { useState } from 'react';
import './Orderhistory.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Define the Desktop3 component
const Orderhistory = () => {

  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <header className="header">
        <div className="logo">TRUXGO</div>
        <div className="user-icon" onClick={ () => window.location.href = '/'}>👤</div>
      </header>
      {/* Sidebar */}
      <div className='grid-container'>
      <div className="sidebar">
        
        <div className="menu-item" onClick={ () => window.location.href = '/formpage'}>New order</div>
        <div className="menu-item" onClick={ () => window.location.href = '/bidlist'}>BidLists</div>
        <div className="menu-item"onClick={ () => window.location.href = '/orderhistory'}>Order History</div>
        
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Order History</h1>

        {/* Active Orders Section */}
        <div className="section">
          <h2>Active Orders</h2>
          <div className="order-card active-order">
            <div>
              <p>Order ID #11254</p>
              <p>Amount: ₹1500</p>
            </div>
            <button className="view-details">Show Bids</button>
          </div>
        </div>

        {/* Previous Orders Section */}
        <div className="section">
          <h2>Previous Orders</h2>
          <div className="order-card">
            <div>
              <p>Delivered August 14</p>
              <p>Order ID #1122</p>
              <p>Amount: ₹1500</p>
            </div>
            <a href="#" className="view-details">View Details &gt;</a>
          </div>
          <div className="order-card">
            <div>
              <p>Delivered May 2</p>
              <p>Order ID #1152</p>
              <p>Amount: ₹3000</p>
            </div>
            <a href="#" className="view-details">View Details &gt;</a>
          </div>
        </div>
      </div>
      </div>
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </div>



  );
};

export default Orderhistory;
import React, { useState } from 'react';
import './Bidlist.css';


const Desktop4 = () => {

  const [activeTab, setActiveTab] = useState('');
  return (
    <div className="container">
      <header className="header">
        <div className="logo">TRUXGO</div>
        <div className="user-icon">👤</div>
      </header>
      <div className='grid-container'>
      <div className="sidebar">
        <div className="menu-item" onClick={ () => window.location.href = '/formpage'}> New order</div>
        <div className="menu-item"onClick={ () => window.location.href = '/bidlist'}>BidLists</div>
        
        <div className="menu-item" onClick={ () => window.location.href = '/orderhistory'}> Order History</div>
      </div>
      <div className="content">
        <h2>Bid List</h2>
        <div className="bid-card">
          <h3>Rajesh</h3>
          <p>Vehicle : 2-Ton Truck</p>
          <p>Ratings : ⭐⭐⭐⭐</p>
          <p>Duration : 3 Days</p>
          <div className="amount">Amount : ₹1500</div>
          <div className="buttons">
            <button className="accept">Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>
        <div className="bid-card">
          <h3>Ram</h3>
          <p>Vehicle : Mini Truck</p>
          <p>Ratings : ⭐⭐⭐⭐⭐</p>
          <p>Duration : 2 Days</p>
          <div className="amount">Amount : ₹1500</div>
          <div className="buttons">
            <button className="accept">Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Desktop4;
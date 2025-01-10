import React from 'react';
import './Listorders.css';

const Listorders = () => {
  return (
    <div className="container">
      <div className='grid-container'>
      <header className="header">
        <div className="logo">TRUXGO</div>
        <div className="user-icon">👤</div>
      </header>
      <div className="sidebar">
        <button className="new-order" onClick={ () => window.location.href = '/formpage'}>New order</button>
        <button className="bid-lists" onClick={ () => window.location.href = '/bidlist'}>BidLists</button>
        <button className="order-history" onClick={ () => window.location.href = '/orderhistory'}>Order History</button>
      </div>
      <main className="main-content">
        <h1>Order History</h1>
        <section className="active-orders">
          <h2>Active Orders</h2>
          <div className="order-card active">
            <div>Order ID #11254</div>
            <div>Amount : ₹1500</div>
            <button className="track-status">Track status</button>
          </div>
        </section>
        <section className="previous-orders">
          <h2>Previous Orders</h2>
          <div className="order-card">
            <div>Delivered August 14</div>
            <div>Order ID #1122</div>
            <div>Amount : ₹1500</div>
            <button className="view-details">View Details</button>
          </div>
          <div className="order-card">
            <div>Delivered May 2</div>
            <div>Order ID #1152</div>
            <div>Amount : ₹3000</div>
            <button className="view-details">View Details</button>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Listorders;
import React from "react";
import "./FormPage.css";

function FormPage() {
  return (
    <div className="app-container">
       
        <div className="sidebar">
      <div className="sidebar-item">
        <span className="icon">+</span>
        <span className="text">New Order</span>
      </div>
      <div className="sidebar-item">
        <span className="icon">📜</span>
        <span className="text">Order History</span>
      </div>
    </div>
    <div className="form-container">
      <h2 className="form-title">Load Detail</h2>
      <form className="load-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Location</label>
            <input type="text" placeholder="Enter pickup location" />
          </div>
          <div className="form-group">
            <label>Drop Location</label>
            <input type="text" placeholder="Enter drop location" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Load Type</label>
            <select>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Load Weight</label>
            <input type="text" placeholder="Enter load weight" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Delivery Date</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Description</label>
            <textarea placeholder="Enter description"></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}



export default FormPage;

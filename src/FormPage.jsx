import React, { useState } from "react";
import "./FormPage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const FormPage = () => {
  const location = useLocation();
  const { response } = location.state || {}; // Safely access response from state

  const { id, usertype } = response || {}; // Safely destructure response

  console.log("ID:", id, "User Type:", usertype);

//  if(!response){
//   console.log("------>response",response);
//  }else{
//   console.log("data not passsed")
//  }


  //States for all the fields
  const [formdata,setFormdata] = useState({
    name: "",
    phone: "",
    source: "",
    destination: "",
    productType: "",
    date: "",
    preferredTime: "",
    vehicleType: "",
    estimatedCost: ""
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const payload = {
      userId:id,
      source: formdata.source,
      destination: formdata.destination,
      productType: formdata.productType,
      sourceGPSCoordinates:"34.6574, 70.6574",
      destinationGPSCoordinates:"34.6574, 70.6574",
      vehicleType: formdata.vehicleType,
      preferredTime: 0,
      estimatedCost: 0
    }
    console.log(payload, "aksjcnas")

    try {
    //   const result = await axios.post("https://bidwheels-api-env.eba-ts5rcstj.us-east-1.elasticbeanstalk.com/User/CreateOrder", payload);
    //   console.log('Response:', result.data);

    //   // Set response message or perform additional actions
    //   setResponseMessage('Form submitted successfully!');
    //   setErrorMessage('');
    // } catch (error) {
    //   console.error('Error:', error);
    //   setErrorMessage('Failed to submit the form. Please try again.');
    //   setResponseMessage('');
    //   console.log("------->>",formdata)
    // }

    const options = {
      method: 'post',
      url: 'http://bidwheels-api-env.eba-ts5rcstj.us-east-1.elasticbeanstalk.com/User/CreateOrder',
      headers: {
          'Cache-Control': 'no-cache',
          Accept: '*/*',
          'User-Agent': 'Fetch Client',
          'Accept-Encoding': 'gzip, deflate',
          Connection: 'keep-alive'
      },
      data: {
        userId: id,
        source: payload.source,
        destination: payload.destination,
        productType: payload.productType,
        sourceGPSCoordinates: '100,100',
        destinationGPSCoordinates: '300,100',
        vehicleType: payload.vehicleType,
        preferredTime: 3,
        estimatedCost: 100
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
      setResponseMessage('');
    }
  };
    
  return (
    <div className="app-container">
      <div className="grid-container">
       <header className="header">
        <div className="logo">TRUXGO</div>
        <div className="user-icon">👤</div>
      </header>
      
        <div className="sidebar">
      <div className="sidebar-item" onClick={ () => window.location.href = '/formpage'}>
        
        <span className="text">New Order</span>
      </div>
      <div className="menu-item" onClick={ () => window.location.href = '/bidlist'}>BidLists</div>
      <div className="sidebar-item">
       
        <span className="text" onClick={ () => window.location.href = '/orderhistory'}>Order History</span>
      </div>
    </div>
    <div className="form-container">
      <h2 className="form-title">Load Detail</h2>
      <form className="load-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
             type="text"
            placeholder="Enter name"
            value={formdata.name}
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} 
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
            type="text" 
            placeholder="Enter phone number"
            value={formdata.phone}
            onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Location</label>
            <input 
            type="text" 
            placeholder="Enter pickup location" 
            value={formdata.source}
            onChange={(e) => setFormdata({ ...formdata, source: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Drop Location</label>
            <input 
            type="text" 
            placeholder="Enter drop location" 
            value={formdata.destination}
            onChange={(e) => setFormdata({ ...formdata, destination: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Load Type</label>
            <select
            placeholder="Select load type"
            value={formdata.productType}
            onChange={(e) => setFormdata({ ...formdata, productType: e.target.value })}
            >
              <option value="" disabled selected>Choose Load Type</option>
              <option  value="type1">More than 2 Ton</option>
              <option value="type2">Less than 2 Ton</option>
            </select>
          </div>
          <div className="form-group">
            <label>Load Weight</label>
            <input 
            type="text" 
            placeholder="Enter load weight" 
            value={formdata.vehicleType}
            onChange={(e) => setFormdata({ ...formdata, vehicleType: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Date</label>
            <input 
            type="date" 
            value={formdata.date}
            onChange={(e) => setFormdata({ ...formdata, date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Delivery Date</label>
            <input 
            type="date" 
            value={formdata.date}
            onChange={(e) => setFormdata({ ...formdata, date: e.target.value })}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group full-width">
            <label>Description</label>
            <textarea 
            placeholder="Enter description"
            value={formdata.description}
            onChange={(e) => setFormdata({ ...formdata, description: e.target.value })}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
}



export default FormPage;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const FormPage = () => {
//   const location = useLocation();
//   const { response } = location.state || {}; // Safely access response from state

//   const { id, usertype } = response || {}; // Safely destructure response

//   console.log("ID:", id, "User Type:", usertype);

//   const [formdata, setFormdata] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     destination: "",
//     weight: "",
//     date: "",
//     time: "",
//     vehicle: "",
//     price: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post(
//         "https://bidwheels-api-env.eba-ts5rcstj.us-east-1.elasticbeanstalk.com/user/createOrder/1",
//         formdata
//       );
//       console.log("Response:", result.data);
//       alert("Form submitted successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to submit the form. Please try again.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Form Page</h2>
//       <p>ID: {id}</p>
//       <p>User Type: {usertype}</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={formdata.name}
//           onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
//         />
//         {/* Other form fields */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormPage;

import React, { useState, useEffect } from 'react';
import './Deliveries.css'; // Assume CSS is in this file
import Popup from './viewDetailsPopup.jsx'; 
import { API_BASE_URL } from './config';


const driverId=1;

const Deliveries = () => {
    const [activeModule, setActiveModule] = useState('Available Deliveries');
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [textField1, setTextField1] = useState('');
    const [textField2, setTextField2] = useState('');
    const [deliveries, setDeliveries] = useState([]);

    const refreshDeliveries = () => {
        getDeliveries(driverId);
    };


    const getDeliveries = async (driverId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/Driver/GetOrders/${driverId}`, {
                method: 'GET'
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                setDeliveries(data); // Update the state with the fetched data
            } else {
                throw new Error('Failed to fetch deliveries');
            }
        } catch (error) {
            console.error('Error:', error);
            setDeliveries([]); // Set an empty array in case of an error
        }
    };

    useEffect(() => {
        if (activeModule === 'Available Deliveries') {
            getDeliveries(driverId);
        }
    }, [activeModule]);

    const handleViewDetails = (delivery) => {
        setSelectedDelivery(delivery);
        setTextField1(delivery.source);
        setTextField2(delivery.destination);
    };

    const closeModal = () => {
        setSelectedDelivery(null);
        setTextField1('');
        setTextField2('');
    };

    return (
        <div className="container">
            <div className="sidebar">
                <button
                    className={`menu-item  ${activeModule === 'Available Deliveries' ? 'active' : ''}`}
                    onClick={() => setActiveModule('Available Deliveries')}
                >
                    Available Deliveries
                </button>
                <button
                    className={`menu-item  ${activeModule === 'My Deliveries' ? 'active' : ''}`}
                    onClick={() => setActiveModule('My Deliveries')}
                >
                    My Deliveries
                </button>
                <button
                    className={`menu-item  ${activeModule === 'Bids' ? 'active' : ''}`}
                    onClick={() => setActiveModule('Bids')}
                >
                    Bids
                </button>
            </div>

            <div className="content">
            <h2 className="module-name">{activeModule}</h2>
                {activeModule === 'Available Deliveries' && (
                    <>
                        {deliveries.length === 0 ? (
                            <p className="empty-order-error">No deliveries available right now for your location. Please try again later.</p>
                        ) : (
                            deliveries.map((delivery, index) => (
                                <div key={index} className="section" style={{ color: 'black', marginBottom: '20px' }}>
                                    <div className="details">
                                        <h3 className="delivery-name">{delivery.userName}</h3>
                                        <div className="locations">
                                            <div>
                                                <p><strong>Pickup Location:</strong></p>
                                                <div className="input-with-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <input
                                                        type="text"
                                                        value={delivery.source}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p><strong>Drop Location:</strong></p>
                                                <div className="input-with-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <input
                                                        type="text"
                                                        value={delivery.destination}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="amount">
                                            <p><strong>Amount: ₹{delivery.estimatedCost}</strong></p>
                                            {delivery.bid && delivery.bid.price !== null && (
                                                <div>
                                                    <p><strong>Previous Bid Price: ₹{delivery.bid.price}</strong></p>
                                                </div>
                                            )}
                                            {delivery.alreadyBidded ? (
                                                <button onClick={() => handleViewDetails(delivery)} className="revise-bid-home"  title="You have already placed a bid on this delivery. Click to Re-Bid.">Revise Bid</button>
                                            ) : (
                                                <button onClick={() => handleViewDetails(delivery)} className="bid-home">Bid</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </>
                )}
            </div>

            {selectedDelivery && (
                <Popup
                Order_ID={selectedDelivery.orderId}
                estimatedCost={selectedDelivery.estimatedCost}
                previousBidCost={selectedDelivery.bid && selectedDelivery.bid.price !== null ? selectedDelivery.bid.price : null}
                previousBidId={selectedDelivery.bid && selectedDelivery.bid.bidId !== null ? selectedDelivery.bid.bidId : null}
                closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default Deliveries;
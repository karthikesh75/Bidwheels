import React, { useState } from 'react';
import "./popup.css";
import { API_BASE_URL } from './config';

const driverId=1;

const Popup = ({ Order_ID, estimatedCost, previousBidCost, previousBidId, closeModal }) => {
    const [textField1, setTextField1] = useState('');
    const [textField2, setTextField2] = useState('');
    const [amountExceedsErrorMessage, setAmountExceedsErrorMessage] = useState('');
    const [isSaveDisabled1, setIsSaveDisabled1] = useState(false);
    const [isSaveDisabled2, setIsSaveDisabled2] = useState(false);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setTextField1(value);

        if (parseFloat(value) > estimatedCost) {
            setAmountExceedsErrorMessage(`Amount cannot be more than our estimated cost ₹${estimatedCost}`);
            setIsSaveDisabled1(true);
        } else {
            setAmountExceedsErrorMessage('');
            setIsSaveDisabled1(false);
        }
    };
    
    const handleBidClick = (orderId, driverId, previousBidIds, refreshDeliveries) => {
        const apiUrl = previousBidCost === null 
            ? `${API_BASE_URL}/Driver/AddBid/${orderId}/${driverId}`
            : `${API_BASE_URL}/Driver/UpdateBid/${previousBidIds}`;
    
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price: textField1, daysRequired: textField2 }),
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to update bid');
            }
        })
        .then(data => {
            console.log('Success:', data);
            closeModal();
            if (refreshDeliveries) {
                refreshDeliveries();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="modals">
            <div className="modals-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2 className='popup-title'>Order ID #{Order_ID.estimatedCost}</h2>
                <div className="input-container">
                    <label>Amount:</label>
                    <input
                    type="number"
                    onChange={handleAmountChange}
                    value={textField1}
                    accept='number'
                    />
                {amountExceedsErrorMessage && <p className="amount-excceds-error-message">{amountExceedsErrorMessage}</p>}
                </div>
                <div className="input-container">
                    <label>Duration:</label>
                    <input
                        type="number"
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value > 0) {
                                setTextField2(value);
                            } else {
                                // Optionally, you can set an error message or handle invalid input
                                setTextField2('');
                            }
                        }}
                        placeholder='Enter number of days' 
                        handleEnabledChange={setIsSaveDisabled2}
                    />
                </div>
                <div>
                {previousBidCost !== null && (
                        <div>
                            <p>Previous Bid Price: ₹{previousBidCost}</p>
                        </div>
                    )}
                </div>
                <div className="button-container">
                    <button
                        className="bid"
                        onClick={() => handleBidClick(Order_ID, driverId, previousBidId)}
                        disabled={isSaveDisabled1}
                    >
                        Bid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
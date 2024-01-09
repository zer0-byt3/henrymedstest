// Confirmation.js
import React, { useState } from 'react';

function Confirmation() {
    const [confirmationData, setConfirmationData] = useState({
        reservationId: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setConfirmationData({ ...confirmationData, [name]: value });
    };

    const handleConfirmation = (e) => {
        e.preventDefault();
        // API call to confirm the reservation
        console.log('Confirmation Data:', confirmationData);
        // Clear the form fields
        setConfirmationData({ reservationId: '' });
    };

    return (
        <div>
            <h1>Confirmation</h1>
            <form onSubmit={handleConfirmation}>
                <div>
                    <label>Reservation ID:</label>
                    <input
                        type="text"
                        name="reservationId"
                        value={confirmationData.reservationId}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}

export default Confirmation;

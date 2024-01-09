// ClientList.tsx

import React, { useEffect, useState } from 'react';
import mockData from '../mockData';
import '../styling/ClientList.css';

function ClientList() {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [confirmedAppointments, setConfirmedAppointments] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    useEffect(() => {
        // Will replace this with actual API call to fetch available slots
        const fetchAvailableSlots = () => {
            setTimeout(() => {
                const availableSlotsData = mockData.providers.map((provider) => {
                    return provider.schedule.map((slot) => {
                        return {
                            providerId: provider.id,
                            date: slot.date,
                            startTime: slot.startTime,
                            endTime: slot.endTime,
                        };
                    });
                }).flat();
                setAvailableSlots(availableSlotsData);
            }, 1000);
        };

        fetchAvailableSlots();
    }, []);

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleReservationConfirm = () => {
        // API call to confirm the reservation
        // Move the confirmed appointment to the "Confirmed Appointments" list
        const updatedAvailableSlots = availableSlots.filter(
            (slot) => slot !== selectedSlot
        );
        setAvailableSlots(updatedAvailableSlots);

        // Add the confirmed appointment to the "Confirmed Appointments" list
        setConfirmedAppointments([...confirmedAppointments, selectedSlot]);

        setSelectedSlot('');
        setReservationConfirmed(true);
    };

    return (
        <div className="client-list-container">
            <h1 className="list-title">Available Slots</h1>
            <ul className="slot-list">
                {availableSlots.map((slot, index) => (
                    <li key={index} className="slot-item">
                        {slot.providerId}, Date: {slot.date}, Time: {slot.startTime} - {slot.endTime}
                        <button onClick={() => handleSlotSelect(slot)} className="select-button">Select</button>
                    </li>
                ))}
            </ul>
            {selectedSlot && (
                <div className="selected-slot">
                    <h2>Selected Slot</h2>
                    <p>
                        Provider ID: {selectedSlot.providerId}, Date: {selectedSlot.date}, Time: {selectedSlot.startTime} - {selectedSlot.endTime}
                    </p>
                    <button onClick={handleReservationConfirm} className="confirm-button">Confirm Reservation</button>
                    {reservationConfirmed && <p>Reservation confirmed!</p>}
                </div>
            )}
            <h1 className="list-title">Confirmed Appointments</h1>
            <ul className="confirmed-list">
                {confirmedAppointments.map((confirmedSlot, index) => (
                    <li key={index} className="confirmed-item">
                        Provider ID: {confirmedSlot.providerId}, Date: {confirmedSlot.date}, Time: {confirmedSlot.startTime} - {confirmedSlot.endTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientList;

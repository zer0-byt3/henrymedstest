// ProviderForm.tsx

import React, { useState } from 'react';
import '../styling/ProviderForm.css';
import { useSchedule } from './ScheduleContext';

function ProviderForm() {
    const [providerData, setProviderData] = useState({
        date: '',
        startTime: '',
        endTime: '',
    });

    const { addScheduleBlock } = useSchedule();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProviderData({ ...providerData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { date, startTime, endTime } = providerData;

        if (!date || !startTime || !endTime) {
            alert('Please fill in all fields');
            return;
        }

        const block = {
            date,
            startTime,
            endTime,
        };

        addScheduleBlock(block);
        setProviderData({ date: '', startTime: '', endTime: '' });
    };

    return (
        <div className="provider-form-container"> {/* Apply the class to the container */}
            <h1 className="form-title">Provider Form</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={providerData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time:</label>
                    <input
                        type="time"
                        id="startTime"
                        name="startTime"
                        value={providerData.startTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time:</label>
                    <input
                        type="time"
                        id="endTime"
                        name="endTime"
                        value={providerData.endTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default ProviderForm;

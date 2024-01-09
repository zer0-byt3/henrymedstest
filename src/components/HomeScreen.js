import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientList from './ClientList';
import ProviderForm from './ProviderForm';
import '../styling/HomeScreen.css'; // Import the CSS file

const UserType = {
    Client: 'client',
    Provider: 'provider',
};

const HomeScreen = () => {
    const [userType, setUserType] = useState(null);

    const handleUserTypeSelect = (selectedUserType) => {
        setUserType(selectedUserType);
    };

    return (
        <div className="home-screen">
            <h1 className="welcome-header">Welcome to Henry Meds Appointment System</h1>
            {userType === null && (
                <div className="user-type-buttons">
                    <button
                        className="user-type-button"
                        onClick={() => handleUserTypeSelect(UserType.Client)}
                    >
                        <Link to="/client-list">Client</Link>
                    </button>
                    <button
                        className="user-type-button"
                        onClick={() => handleUserTypeSelect(UserType.Provider)}
                    >
                        <Link to="/provider-form">Provider</Link>
                    </button>
                </div>
            )}
            {userType === UserType.Client && <ClientList />}
            {userType === UserType.Provider && <ProviderForm />}
        </div>
    );
};

export default HomeScreen;

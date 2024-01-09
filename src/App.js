import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ClientList from './components/ClientList';
import Home from './components/HomeScreen';
import ProviderForm from './components/ProviderForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-list" element={<ClientList />} />
        <Route path="/provider-form" element={<ProviderForm />} />
      </Routes>
    </Router>
  );
}

export default App;

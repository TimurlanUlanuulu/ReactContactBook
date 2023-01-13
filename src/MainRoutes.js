import React from 'react';
import AddContact from './components/AddContact';
import {Routes, Route} from "react-router-dom"
import ContactList from './components/ContactList';
import Details from './components/Details';
import EditContact from './components/EditContact';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ContactList/>} />
            <Route path="/add" element={<AddContact/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/edit/:id" element={<EditContact/>} />
        </Routes>
    );
};

export default MainRoutes;
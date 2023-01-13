import axios from "axios";
import React, { createContext, useState } from "react";

export const contactBookContext = createContext();

const API = "http://localhost:8001/contacts";

const ContactBookContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState({
    name: "",
    surname: "",
    phone: "",
    url: "",
  });

  async function getContacts() {
    let { data } = await axios.get(API);
    setContacts(data);
  }

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getContactById(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  async function saveEditedContact(editedContact) {
    await axios.patch(`${API}/${editedContact.id}`, editedContact);
    getContacts();
  }

  let values = {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    oneContact,
    getContactById,
    saveEditedContact,
  };

  return (
    <contactBookContext.Provider value={values}>
      {children}
    </contactBookContext.Provider>
  );
};

export default ContactBookContextProvider;

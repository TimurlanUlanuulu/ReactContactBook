import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contactBookContext } from "../context/ContactBookContextProvider";

const ContactList = () => {
  const { contacts, getContacts, deleteContact } =
    useContext(contactBookContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container">
      <div className="contacts">
        {contacts.map((contact) => (
          <div className="contact__form" key={contact.id}>
            <div className="image">
              <img className="contact-photo" src={contact.url} alt="photo" />
            </div>
            <h3>{contact.name}</h3>
            <div className="data contact__data">
              <Link to={`/details/${contact.id}`}>
                <button className="btn">Подробнее</button>
              </Link>

              <button
                className="del-btn btn"
                onClick={() => deleteContact(contact.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;

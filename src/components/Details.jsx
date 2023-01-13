import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { contactBookContext } from '../context/ContactBookContextProvider';

const Details = () => {
    const {oneContact, getContactById} = useContext(contactBookContext);

    const params = useParams();

    useEffect(() => {
        getContactById(params.id);
    }, [])


    return (
    <div className="container">
      <div className="contacta">
          <div className="contact__form one-contact">
            <div className="image one-contact__image">
              <img
                className="contact-photo"
                src={oneContact.url}
                alt="photo"
              />
            </div>
            <h3>Данные контакта</h3>
            <div className='one-contact__info'>
                <p><strong>ФИО:</strong></p>
                <p>{oneContact.name} {oneContact.surname}</p>
            </div>
            <div className='one-contact__info'>
                <p><strong>Номер телефона:</strong></p>
                <p>{oneContact.phone}</p>
            </div>
            <div className="">
              <Link to={`/edit/${oneContact.id}`}>
                <button className="btn" >Редактировать</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
    );
};

export default Details;
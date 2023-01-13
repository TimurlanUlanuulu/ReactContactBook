import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { contactBookContext } from "../context/ContactBookContextProvider";

const EditContact = () => {
  const { saveEditedContact, getContactById, oneContact } =
    useContext(contactBookContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  const params = useParams();

  useEffect(() => {
    getContactById(params.id);
  }, []);

  useEffect(() => {
    setName(oneContact.name);
    setSurname(oneContact.surname);
    setPhone(oneContact.phone);
    setUrl(oneContact.url);
  }, [oneContact]);

  function handleSave() {
    if (name == "" || surname == "" || phone == "" || url == "") {
      alert("Заполните все поля");
      return;
    }

    let obj = {
      name,
      surname,
      phone,
      url,
      id: oneContact.id,
    };

    saveEditedContact(obj);

    alert("Контакт успешно добавлен!");
  }

  return (
    <div>
      <div className="edit-form">
        <div className="form">
          <div className="edit-title">
            <h3>Редактирование контакта</h3>
          </div>
          <div className="image">
            <img className="contact-photo form-image" src={url} alt="" />
          </div>
          <div className="data">
            <div className="data__inp name">
              <span> Имя: </span>
              <input
                className="edit-name-inp"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="data__inp surname">
              <span> Фамилия: </span>
              <input
                className="edit-surname-inp"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="data__inp phone-num">
              <span> Номер телефона: </span>
              <input
                className="edit-phone-inp"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="data__inp photo">
              <span> Фото: </span>
              <input
                className="edit-photo-inp"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <Link to={`/details/${oneContact.id}`}>
              <button className="btn" onClick={handleSave}>
                Сохранить
              </button>
            </Link>
            <Link to={`/details/${oneContact.id}`}>
              <button className="btn">Назад</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;

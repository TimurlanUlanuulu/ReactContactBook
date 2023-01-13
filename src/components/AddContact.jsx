import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { contactBookContext } from "../context/ContactBookContextProvider";

const AddContact = () => {
  const { addContact } = useContext(contactBookContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (name == "" || surname == "" || phone == "" || url == "") {
      alert("Заполните все поля");
      return;
    }

    let newContact = {
      name,
      surname,
      phone,
      url,
    };

    addContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
    setUrl("");
    alert("Контакт успешно добавлен!");
  }

  return (
    <div className="container">
      <div className="form">
        <h3>Введите данные контакта</h3>
        <div className="data">
          <div className="data__inp name">
            <span> Имя: </span>
            <input
              className="name-inp"
              type="text"
              placeholder="Ivan"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="data__inp surname">
            <span> Фамилия: </span>
            <input
              className="surname-inp"
              type="text"
              placeholder="Ivanov"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="data__inp phone-num">
            <span> Номер телефона: </span>
            <input
              className="phone-inp"
              type="text"
              placeholder="0777888999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="data__inp photo">
            <span> Фото: </span>
            <input
              className="photo-inp"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button className="add-btn btn" onClick={handleAdd}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

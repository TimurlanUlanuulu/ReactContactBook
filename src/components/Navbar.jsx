import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-list">
          <NavLink to="/">Ваши Контакты</NavLink>
          <NavLink to="/add">Добавить контакт</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

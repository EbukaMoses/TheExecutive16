import React from "react";
import { NavLink } from "react-router-dom";


const Button = ({ title, icon, path, bg, onClick }) => {
  return (
    <div>
      <NavLink to={path} className={`button ${bg}`} onClick={onClick}>
        {title} {icon && icon}
      </NavLink>
    </div>
  );
};

export default Button;

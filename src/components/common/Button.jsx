import React from "react";
import { NavLink } from "react-router-dom";


const Button = ({ title, icon, path, bg }) => {
  return (
    <div>
      <NavLink to={path} className={`button ${bg}`}>
        {title} {icon && icon}
      </NavLink>
    </div>
  );
};

export default Button;

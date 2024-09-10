import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, icon, path, bg, onClick }) => {
  return (
    <div>
      <Link to={path} className={`button ${bg}`} onClick={onClick}>
        {title} {icon && icon}
      </Link>
    </div>
  );
};

export default Button;

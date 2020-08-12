import React from "react";
import "./NavElement.sass";
import { Link } from "react-router-dom";
export default function NavElement(props) {
  return (
    <li className="nav-element">
      <Link
        to={props.relativePath}
        className="nav-link nav-link-ltr"
        onClick={() => {
          props.onClick(props.linkText);
        }}
      >
        {props.linkText}
      </Link>
    </li>
  );
}

import React from 'react';
import Nav from "react-bootstrap/Nav";

export const Jumbotron = (props) => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}


export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}

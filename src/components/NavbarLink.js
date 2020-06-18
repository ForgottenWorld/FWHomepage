import React from 'react';

export default function NavbarLink(props) {

  return (
    <div className="navbar-link" onClick={() => window.open(props.url, "_blank")}>
        {props.name}
    </div>
  );
};
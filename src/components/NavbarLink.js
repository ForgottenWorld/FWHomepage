import React from 'react';

export default function NavbarLink(props) {

  return (
    <div className="navbar-link" onClick={() => {
      if (props.url)
        window.open(props.url, "_blank")
      else if (props.action)
        props.pageSetter(props.action)
    }
    }>{props.name}
    </div>
  );
};
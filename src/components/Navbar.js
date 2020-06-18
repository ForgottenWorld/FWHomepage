import React from 'react';
import NavbarLink from './NavbarLink';

/*
    https://forgottenworld.it/launcher/index.html
    https://forgottenworld.it/sostienici.html
*/
export default function Navbar(props) {
    const menus = [
        {name: "Forum", url: "https://forum.forgottenworld.it", action: null, pcOnly: false},
        {name: "Wiki", url: "https://wiki.forgottenworld.it", action: null, pcOnly: false},
        {name: "Store", url: "https://forgotten-world.tebex.io/", action: null, pcOnly: false},
        {name: "Status", url: "https://status.forgottenworld.it", action: null, pcOnly: false},
        {name: "Votaci", url: "https://www.minecraft-italia.it/server/forgottenworld", action: null, pcOnly: false},
        {name: "Launcher", url: null, action: 1, pcOnly: true},
        {name: "Sostienici", url: "https://www.patreon.com/ForgottenWorldCommunity", action: null, pcOnly: false} //2
    ]
  
    return (
        <div className="navbar">
            {menus.map((m, i) => <NavbarLink pageSetter={props.pageSetter} key={"nbl"+i} name={m.name} pcOnly={m.pcOnly} url={m.url} action={m.action}></NavbarLink>)}
        </div>
    );
}
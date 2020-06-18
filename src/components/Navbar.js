import React from 'react';
import NavbarLink from './NavbarLink';

/*
    https://forgottenworld.it/launcher/index.html
    https://forgottenworld.it/sostienici.html
*/
export default function Navbar(props) {
    const menus = [
        {name: "Forum", url: "https://forum.forgottenworld.it", action: null},
        {name: "Wiki", url: "https://wiki.forgottenworld.it", action: null},
        {name: "Store", url: "https://forgotten-world.tebex.io/", action: null},
        {name: "Status", url: "https://status.forgottenworld.it", action: null},
        {name: "Votaci", url: "https://www.minecraft-italia.it/server/forgottenworld", action: null},
        {name: "Launcher", url: null, action: 1},
        {name: "Sostienici", url: "https://www.patreon.com/ForgottenWorldCommunity", action: null } //2
    ]
  
    return (
        <div className="navbar">
            {menus.map((m, i) => <NavbarLink pageSetter={props.pageSetter} key={"nbl"+i} name={m.name} url={m.url} action={m.action}></NavbarLink>)}
        </div>
    );
}
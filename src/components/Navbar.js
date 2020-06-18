import React from 'react';
import NavbarLink from './NavbarLink';

/*
       Link ai vari social (twitter, fb, instagram, telegram e discord)
*/
export default function Navbar() {
    const menus = [
        {name: "Forum", url: "https://forum.forgottenworld.it"},
        {name: "Ts", url: "ts3server://ts3.forgottenworld.it"},
        {name: "Wiki", url: "https://wiki.forgottenworld.it"},
        {name: "Store", url: "https://forgotten-world.tebex.io/"},
        {name: "Status", url: "https://status.forgottenworld.it"},
        {name: "Votaci", url: "https://www.minecraft-italia.it/server/forgottenworld"},
        {name: "Launcher", url: "https://forgottenworld.it/launcher/index.html"},
        {name: "Sostienici", url: "https://forgottenworld.it/sostienici.html"}
    ]
  
    return (
        <div className="navbar">
            {menus.map((m, i) => <NavbarLink key={"nbl"+i} name={m.name} url={m.url}></NavbarLink>)}
        </div>
    );
}
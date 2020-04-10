import React from "react";
import { useDarkMode } from "../hooks/useDarkMode"

export default function ReqPlayers(props){

    const [darkMode, setDarkMode] = useDarkMode("isDark");
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
        <div>
            <div onClick={toggleMode}>DarkMode</div>
            <h2>{props.player.name}</h2>
            <p>{props.player.country}</p>
        </div>
    )
}

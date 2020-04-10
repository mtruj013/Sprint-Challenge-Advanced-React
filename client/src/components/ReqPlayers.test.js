import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import ReqPlayers from './ReqPlayers'

test("renders ReqPlayers without crashing", () =>{
    const player= {name: "Maria", country: "USA"}
    render(<ReqPlayers player={player}/>)
})

test("darkMode text appears", ()=>{
    
    async () => {const {getBytext} = render(<ReqPlayers/>)

    getBytext(/DarkMode/i);}
})
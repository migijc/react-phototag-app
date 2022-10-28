import pizzaMan from "../img/pizzaman.png"
import joker from "../img/joker.png"
import blueEyes from "../img/blueeyes.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function GameOptions(){
    
    let navigate=useNavigate()

    function handleQuit(e){
        console.log(e.target)
        navigate("/")
    }

    return (
        <div className="characterPeek">
            <img className="peekImg" src={pizzaMan} alt="character1"/>
            <img className="peekImg" src={joker} alt="character2"/>
            <img className="peekImg" src={blueEyes} alt="character3"/>
            <button className="quitGameButton" onClick={handleQuit}>Quit Game</button>
        </div>
    )
}
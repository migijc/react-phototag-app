import pizzaMan from "../img/pizzaman.png"
import joker from "../img/joker.png"
import blueEyes from "../img/blueeyes.png"
import {useState, useEffect} from "react"



export default function CharacterSelect(props){

    function handleClick(e){
        let characterToCheck=props.characters.filter(character=> character.name === e.target.dataset.name)
        characterToCheck=characterToCheck[0]
        if(characterToCheck===undefined){
           return props.displayToFalse(false)
        }

        let maxX=characterToCheck.offsetX + characterToCheck.paddingX
        let minX=characterToCheck.offsetX - characterToCheck.paddingX
        let maxY=characterToCheck.offsetY + characterToCheck.paddingY
        let minY=characterToCheck.offsetY - characterToCheck.paddingY
        
        let [clickedX, clickedY] = props.coordinatesClicked

        if((clickedX <= maxX && clickedX >= minX) && (clickedY <= maxY && clickedY >= minY)){
            props.newChar(characterToCheck.name)
            props.displayToFalse(false)
        }else{
            props.displayToFalse(false)
        }
    }

    return (
        <div id="characterSelectContainer" style={{
            position: "absolute",
            width: "5.5rem",
            top: props.pageY,
            left: props.pageX +10
        }}>
           <p onClick={handleClick} className="selection" data-name="joker">The Joker</p>
           <p onClick={handleClick} className="selection" data-name="blueEyes">Blue Eyes</p>
           <p onClick={handleClick} className="selection" data-name="pizzaMan">Pizza Man</p>
        </div>
    )
}
import pizzaMan from "../img/pizzaman.png"
import joker from "../img/joker.png"
import blueEyes from "../img/blueeyes.png"


export default function Pregame(props){
    return (
        <div id="pregameContainer">
            <p className="mainRule">Find the following characters in the shortest time possible</p>
            <hr/>
            <div className="rulesContainer">
                <div className="pizzaManToFind characterToFind">
                    <p>Pizza Man</p>
                    <img className="imgInRules" src={pizzaMan} alt="target one"/>
                </div>

                <div className="jokerToFind characterToFind">
                    <p>The Joker</p>
                    <img className="imgInRules" src={joker} alt="target two"/>
                </div>
                <div className="blueEyesToFind characterToFind">
                    <p>Blue Eyes</p>
                    <img className="imgInRules" src={blueEyes} alt="target three"/>
                </div>
            </div>
            <button onClick={props.handleButton}>Play Now</button>
        </div>
    )
}
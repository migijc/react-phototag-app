import BG from "../img/bg.jpg"
import Header from "./Header"
import { useNavigate, Link } from "react-router-dom"

export default function Home(){

    const navigate=useNavigate()
    
    return (
        <div id="home">
            <Header/>
            <h3 className="welcomeMessage">Welcome, choose your map and </h3>
            <div className="allGames">
                <div className="map" onClick={()=> navigate("gamepage")}>
                     <img className="roundDisplay" src={BG} alt="round to play"/>
                     <div className="mapDetails">
                          <h4 className="mapName">"Cross-over Convention"</h4>
                          <p className="mapDescription">Test your skills on this chaotic one of a kind iFind map. Featuring animated characters from Marvel, Nintendo,
                                Pixar, DC Universe and many more. Find all 3 characters in the fastest time possible and compare your score
                                to the rest of the worlds on our leaderboards.
                          </p>
                     </div>
                </div>
            </div>
        </div>
    )
}
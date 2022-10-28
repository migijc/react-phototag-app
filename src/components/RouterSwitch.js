import {BrowserRouter, Routes, Route} from "react-router-dom"
import GamePage from "./GamePage"
import Home from "./Home"
import {useState} from "react"
import Leaderboard from "./Leaderboard"



export default function RouterSwitch(){
    const [totalTime, setTotalTime] = useState(null)

    function handleGameEnd(time){
        setTotalTime(time)
    }

    function resetTime(){
        setTotalTime(null)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="gamepage" element={<GamePage onGameEnd={handleGameEnd}/>}/>
                <Route path="leaderboard" element={<Leaderboard currentTime={totalTime}  resetTime={resetTime}/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}
import Header from "./Header"
import { useEffect, useState } from "react"
import {db} from "../FirebaseApp"
import {
    collection,
    addDoc,
    getDoc,
    getDocs,
} from "firebase/firestore"
import SubmitTime from "./SubmitTime"


export default function Leaderboard(props){
    const [leaderboard, setLeaderBoard] = useState(null)
    const [toSubmit, setToSubmit] = useState(false)
    const [scores, setScores] =useState([])
    const [wasSubmitted, setWasSubmitted] = useState(false)
    const [scoresToDisplay, setScoresToDisplay] = useState([])
    const [wasGamePlayed, setWasGamePlayed] = useState(false)

    const colRef= collection(db, "highScores")


    useEffect(()=>{


        let inStore=getDocs(colRef, "users")
        inStore.then(
            response =>{
                let newScores=[]
                response.docs.forEach(doc=>{
                    let data=doc.data()
                    newScores.push(data)
                })
                setScores(newScores)
            }
        )
    },[wasSubmitted])

    function handleSubmit(){
        setToSubmit(true)
    }

    function onSubmit(){
        setWasSubmitted(true)
        props.resetTime()
    }

    function displayScores(){
        let allScores=[]
        scores.forEach(score=>{
            allScores.push(
                <div key={Math.random()} className="aScore">
                    <div className="aPlayerName">{Object.keys(score)[0]}</div>
                    <div className="aPlayerScore">{Object.values(score)[0]}</div>
                </div>)
            
        })
        setScoresToDisplay(allScores)
    }

    useEffect(()=>{
        displayScores()
    },[scores])

   


    return (
        <div id="leaderboard">
            <Header/>
            <h3 className="leaderboardTitle">Global</h3>
            <div className="allScores">
            {scoresToDisplay}

            </div>
           {props.currentTime !== null && wasSubmitted===false && <div className="afterGame">
                <p className="timeFinishedMessage">You finished in {props.currentTime} seconds. Post your results!</p>
                {toSubmit===false && <button onClick={handleSubmit}>Submit Score!</button>}
                {toSubmit===true && <SubmitTime time={props.currentTime} handleSubmit={onSubmit}/>}
            </div>}
         
        </div>
    )
}
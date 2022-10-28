import { useState } from "react"
import {db} from "../FirebaseApp"
import {
    collection,
    addDoc,
    getDoc,
    getDocs,
} from "firebase/firestore"


export default function SubmitTime(props){
    const [currentUser, setCurrentUser] = useState("")
    const colRef= collection(db, "highScores")

    
    function handleTextChange(e){
        setCurrentUser(e.target.value)
    }

    function handleSubmit(){
        addDoc(colRef, {
            [currentUser]:props.time
        })
        props.handleSubmit()
    }


    

    return (
        <div className="submitCon">
            <input onChange={handleTextChange} type="text" placeholder="Username"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
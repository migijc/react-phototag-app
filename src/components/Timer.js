import {useEffect, useState} from "react"
export default function Timer(props){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        let id= setInterval(()=> setCount((oldCount)=> oldCount+1), 1000)
    }, [])

    useEffect(()=>{
        props.gameOver(count)

    })

    return null
    
}
import Pregame from "./PreGame";
import {useState, useEffect} from "react"
import gameImg from "../img/bg.jpg"
import CharacterSelect from "./CharacterSelect";
import TargetArea from "./TargetArea";
import { db } from "../FirebaseApp"
import {collection, getDocs, doc} from "firebase/firestore"
import Timer from "./Timer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import GameOptions from "./GameOptions";
import Hamburger from "hamburger-react"
import CharacterTarget from "./CharacterTarget";


function GamePage(props) {
  const [didGameStart, setDidGameStart] = useState(false)
  const [displaySelector, setDisplaySelector] = useState(false)
  const [selector, setSelector] = useState(null)
  const [target, setTarget] = useState(null)
  const [charactersFound, setCharactersFound] = useState([])
  const [charLocation, setCharLocation] = useState("")
  const [isPregame, setisPregame] = useState(true)
  const [time, setTime] = useState(0)
  const [didGameEnd, setDidGameEnd] = useState(false)
  const [displayOption, setDsplayOptions] = useState(false)
  const navigate=useNavigate()



  useEffect(()=>{
    let charColRef= collection(db, "characters")
    let docs=getDocs(charColRef)
    docs.then(
        response =>{
            let newState=[]
            let allDocs=response.docs
            let docsData=allDocs.forEach(doc=>{
                newState.push(doc.data())
                newState[newState.length-1].name=doc.id
            })
            setCharLocation(newState)
        }
    )
  }, [])


  useEffect(()=>{
    if(charactersFound.length === 3){
        setDidGameStart(false)
        setCharactersFound([])
        setDidGameEnd(true)
        props.onGameEnd(time)
        navigate("/leaderboard")
    }
  })
  

  function handleStartButton(){
    setDidGameStart(true)
    setisPregame(false)
  }

  function addNewCharacter(character){
     setCharactersFound(prev=>{
          return [...prev, character]
     })
     let copy=[...charLocation]
     copy=copy.filter(item=>{
        if(item.name !== character){
          return item
        }
     })
     setCharLocation(copy)
  }



 function handleClickOnImg(e){
    if(displaySelector===true){
      setDisplaySelector(false)
      return
    }
    let x= e.nativeEvent.offsetX
    let y=e.nativeEvent.offsetY
    setSelector(<CharacterSelect 
        coordinatesClicked={[x,y]} 
        pageX={+x +40} pageY={+y-20} 
        characters={charLocation}
        newChar={addNewCharacter}
        displayToFalse={setDisplaySelector}
      />)
    setTarget(<TargetArea pageX={x -38} pageY={y-35}/>)
    setDisplaySelector(true)

  }

  function updateTime(gameTime){
    setTime(gameTime)
  }

  function handleOptions(){
      if(displayOption){
          return setDsplayOptions(false)
      }else{
        setDsplayOptions(true)
      }
  }

  return (
    <div className="App">
      {didGameStart===false && <Header/>}
      {didGameStart===true && <img onClick={handleClickOnImg} className="gameImg" src={gameImg} alt="Game"></img>}
      {isPregame===true && <Pregame handleButton={handleStartButton}/>}
      {displaySelector===true && selector}
      {displaySelector===true && target}
      {didGameStart===true && <Timer gameOver={updateTime}/>}
      {didGameStart===true && <div className="gameOptions" onClick={handleOptions} >
          <Hamburger color="rgba(255,255,255, .6)" />
          {displayOption===true &&  <GameOptions/>}
      </div> } 

     {charactersFound.includes("blueEyes")===true && <CharacterTarget pageX={179} pageY={1111}/>}
      {charactersFound.includes("joker")===true && <CharacterTarget pageX={464} pageY={245}/>}
      {charactersFound.includes("pizzaMan")===true && <CharacterTarget pageX={877} pageY={118}/>}

    </div>
  );
}

export default GamePage;

export default function CharacterTarget(props){

        return (
         <div className="characterTarget" style={{
             position: "absolute",
             height: "4.2rem",
             width: "4.2rem",
             top: props.pageY,
             left: props.pageX
         }}>
         </div>
        )
    }

export default function TargetArea(props){
   return (
    <div id="targetArea" style={{
        position: "absolute",
        height: "4.2rem",
        width: "4.2rem",
        top: props.pageY,
        left: props.pageX
    }}>
    </div>
   )
}
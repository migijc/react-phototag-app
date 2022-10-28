import { Link } from "react-router-dom"

export default function Header(){
    
    return (
        <div id="header">
            <h1 id="headerLogo">iFind</h1>
            <nav>
            <Link to="/"><a>Home</a></Link>
            <Link to="/leaderboard"><a>Leaderboards</a></Link>
            </nav>
        </div>
    )
}
import { Link } from "react-router-dom";
function TopMovieBox(props){

    
    return(
        <div className="top_movieBox">
             <img src={props.imgsrc.posterUrl} /> *
        </div>
    )
}

export default TopMovieBox;
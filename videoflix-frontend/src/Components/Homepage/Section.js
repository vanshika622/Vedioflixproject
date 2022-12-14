// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
//import Slider from "react-slick"
import { Link } from "react-router-dom"
function Section(props){
   
   
    
    
    return(
        
        <div>
            
         <div className="section">
            <div className="section_heading Logo">
                {props.name} Movies
            </div>
           
            <div className="movie_container">
                {
                    props.movies.map((movie, index)=>{
                        console.log("%%%%%%%%%",movie)
                        return(
                            <div className="card" key={index}>
                    <div className="card_img" >
                        <img src={movie.posterUrl}/>
                    </div>
                    <div className="card_info">
                        <div className="movie_name">{movie.name}</div>
                        <div className="play_icon">
                            {/* <a href="#" target="_blank" > */}
                             <Link to={"/player/"+movie._id} className="mt-2 me-2 play_icon"><i className="fa-solid fa-play ms-2"></i></Link>   
                            {/* </a> */}
                        </div>
                    </div>
                </div>
                        )
                    })
                }
               
               
            
            </div>
           
        </div> 
        </div>
    )
}

export default Section
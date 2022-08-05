function Card(props) {
    console.log("props", props.com_movie)
    return (
        <>
            {/* <div classNameName="card_boundary">
              <div classNameName="card_img">
                <img src={props.com_movie.posterUrl} alt="" />
                </div>
                <div classNameName="card_info">
                
                 <h5 classNameName="card_title mt-2 ms-2">{props.com_movie.name}</h5>
                 <a href="" target="_blank" classNameName="mt-2 me-2 anchor">
                 <i classNameName="fa-solid fa-play ms-2"></i> 
                     </a>
                </div>
            </div> */}
            
            <div className="cards">
              <div className="image">
               <img  src={props.com_movie.posterUrl}/>
              </div>
              <div className="info">
                <div className="card_title">
                 {props.com_movie.name}
                </div>
                <div className="icon anchor">
                  <a href="" target="_blank" className="mt-2 me-2">
                    <i className="fa-solid fa-play ms-2 play_icon"></i> 
                        </a>
                </div>
              </div>
            </div>
            
        </>
    )
}

export default Card
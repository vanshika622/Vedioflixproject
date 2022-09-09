import Header from "../Homepage/Header"
import '../Homepage/Homepage.css'
import TopMovieBox from "../Homepage/TopMovieBox"
import Section from "../Homepage/Section"
import Footer from "../Homepage/Footer"
import { useEffect, useRef, useState } from "react"
import { useParams } from 'react-router-dom'

// more better way
function Player() {

  let params = useParams();
  let [movie, setMovie] = useState({});
  console.log(params.id)

  useEffect(() => {
    let token = localStorage.getItem("videoflix_token");
    console.log(token)

    fetch(`http://localhost:8000/movies/${params.id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => {

        return res.json();
      })
      .then((data) => {
        console.log(data)
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className="main_container">

      <Header />

      <TopMovieBox imgsrc={movie} />

      <div className="details">

        <div className="desc-child">
        <div className="desc">
          <h3>Title</h3>
          <p>
            {movie.name}
          </p>

        </div>

        <div className="desc">
          <h3>Genre</h3>
          <p>
            {movie.genre}
          </p>

        </div>
        <div className="desc">
          <h3>Released Date</h3>
          <p>
            {movie.releaseDate}
          </p>

        </div>
        <div className="desc">
          <h3>Imbd Rating</h3>
          <p>
            {movie.imdbRating}
          </p>

        </div>
        </div>
       <div className="description">
        <h3>Description</h3>
        <p>
          {movie.description}
        </p>
       </div>

      </div>
      <Footer />

      {/*         
        <SuggestionBanner comedy_list={comedy}/> */}
    </div>
  )
}
export default Player
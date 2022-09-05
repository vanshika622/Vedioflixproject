import './Homepage.css'


import { useState, useEffect } from 'react'
function Header() {
  let token = localStorage.getItem("videoflix_token")
  let [Allmovies, setMovies] = useState([]);
  let [searchedmovies, setSearchedMovies] = useState([]);
  let [searchAreavisible, setSearchAreaVisible]=useState(false)
  useEffect(() => {
    fetch("http://localhost:8000/movies", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)


      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function searchmovies(name) {

    if (name !== "") {
      let filterdmovies = Allmovies.filter((movie, index) => {
        return movie.name.toLowerCase().includes(name.toLowerCase())

      })
      console.log(filterdmovies)
      setSearchedMovies(filterdmovies);
    }
    else{
      setSearchedMovies([]);
    }

    // console.log(searchedmovies)
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand Logo">VideoFlix</a>
          <form className="d-flex">


            <input className="form-control me-2" type="search" placeholder="Search" 
            onChange={(event) => {
              searchmovies(event.target.value);
            }}  
            onFocus={()=>{
              setSearchAreaVisible(true)
            }}
            onBlur={()=>{
              if(searchedmovies.length===0){
                setSearchAreaVisible(false)
              }
              
            }}
            aria-label="Search" />

            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

         {
          searchAreavisible===true?(
            <div className="search-results">
            {
              searchedmovies.length !== 0 ? (
                <div className="section">
                  {/* <div className="section_heading Logo">
                    Searched Movies
                  </div> */}
    
                  <div className="movie_container">
                    {
                      searchedmovies.map((movie, index) => {
                        return (
                          <div className="card" key={index}>
                            <div className="card_img" >
                              <img src={movie.posterUrl} />
                            </div>
                            <div className="card_info">
                              <div className="movie_name">{movie.name}</div>
                              <div className="play_icon">
                                <a href="#" target="_blank" className="mt-2 me-2 play_icon">
                                  <i className="fa-solid fa-play ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
    
    
    
                  </div>
    
                </div>
              ) : (
                <div>
                <p className='warning'>Please write something or write correctly</p>
                </div>
              )
            }
          </div> 
          ):
          null
         }
      

    </>
  )
}

export default Header;
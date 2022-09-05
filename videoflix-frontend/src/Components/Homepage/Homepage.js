//import { Navigate } from "react-router-dom"
// function HomePage(){
//     let token= localStorage.getItem("videoflix_token")
    // let navigate= useNavigate();
    //when token not null then display homepage only
//     return token !==null ?(
//         <div className="container">

//         </div>
//     ):
//     (
//         //r=to redirect the page in jSX form 
//        <Navigate to="/login/" />
//     )
// }
import Header from "./Header"
import './Homepage.css'
import TopMovieBox from "./TopMovieBox"
import Section from "./Section"
import Footer from "./Footer"
 import { useEffect, useRef, useState } from "react"

// more better way
function HomePage(){
    let [Allmovies,setMovies]= useState([]);
    let top=useRef({});
    let trending= useRef([]);
    // let [trending, setTrending]=useState([]);
    let comedy= useRef([]);
    let action=useRef([]);
    let drama= useRef([]);
      //let [comedy, setComedy]=useState([]);
    //  let superhero=useRef([])
     let token = localStorage.getItem("videoflix_token")
     console.log(token)
    useEffect(()=>{
        fetch("http://localhost:8000/movies",{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
           setMovies(data)
            top.current=data.find((movie, index)=>{
             return movie.top===true;
            })
            
         comedy.current=data.filter((movie,index)=>{
            return movie.genre.toLowerCase().includes("comedy".toLowerCase());
         })
          action.current=data.filter((movie,index)=>{
            return movie.genre.toLowerCase().includes("action".toLowerCase());
          })
          drama.current=data.filter((movie,index)=>{
            return movie.genre.toLowerCase().includes("drama".toLowerCase());
          })
         
         

        //     
             trending.current=data.sort((a,b)=>{
                 return b.watchers-a.watchers
             }).slice(0,5);
            
            //setTrending(trending.current)
             console.log(trending)

        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div className="main_container">
            <Header />
            
        <TopMovieBox imgsrc={top.current} /> 
        <Section name="trending" movies={trending.current}/>
        <Section name ="Comedy" movies={comedy.current} />
        <Section name= "Action" movies={action.current} />
        <Section name= "Dramatical" movies={drama.current} />
        <Footer />

{/*         
        <SuggestionBanner comedy_list={comedy}/> */}
        </div>
    )
}
export default HomePage
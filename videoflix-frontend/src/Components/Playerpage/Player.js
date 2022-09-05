import Header from "../Homepage/Header"
import '../Homepage/Homepage.css'
import TopMovieBox from "../Homepage/TopMovieBox"
import Section from "../Homepage/Section"
import Footer from "../Homepage/Footer"
 import { useEffect, useRef, useState } from "react"
 import {useParams} from 'react-router-dom'

// more better way
function Player(){
    
    let params = useParams();
    console.log(params)
   
    useEffect(()=>{
        let token = localStorage.getItem("videoflix_token");

          fetch(`http://localhost:8000/movies/${params.id}`,{
             headers:{
                "Authorization":`Bearer ${token}`
             }
          })
    },[])
    return(
        <div className="main_container">
            
            <Header />
            
        {/* <TopMovieBox />  */}
       
        <Footer />

{/*         
        <SuggestionBanner comedy_list={comedy}/> */}
        </div>
    )
}
export default Player
import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import './Loginandregister.css'
import Header from '../Homepage/Header';
import Footer from '../Homepage/Footer';
function Login() {
    
    let form = useRef();
    let userCred = {};
    let navigate= useNavigate();
    function readValue(property, value) {
        userCred[property] = value;

    }

    function login() {
        fetch("http://localhost:8000/user/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCred)

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // to reset the form 
                //form.current.reset();
                if(data.success===true){
                    localStorage.setItem("videoflix_token",data.token)
                    navigate("/homepage")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
        <div className='app'>
            <Header />
        <form className="container" ref={form} >
            
            <input type="email" className="form-control" placeholder="Enter Email" onChange={(event) => {
                readValue("email", event.target.value)
            }} />
            <input type="password" className="form-control" placeholder="Create Password" onChange={(event) => {
                readValue("password", event.target.value)
            }} />
            

            <button type="button" className="btn btn-primary" onClick={login}>Login</button>
        </form>

       
        </div>
        <Footer/>
        </div>
    )
}

export default Login
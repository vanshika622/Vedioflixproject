import { Navigate } from "react-router-dom"
function Protect(props){
    let token = localStorage.getItem("videoflix_token")

    return token!==null ? props.children:<Navigate to="/login/"/>
}

export default Protect
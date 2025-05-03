import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePageredirect(){

    const navigate = useNavigate();
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("User"));
        if(user){
            navigate("/Home")
        }
        else{
            navigate("/Dashboard")
        }

    })
    return(
        <div>Loding ...</div>
    )
}

export default HomePageredirect;
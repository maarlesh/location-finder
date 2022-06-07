import React from "react";
import "./hemisphere.css"
import asia from "./images/asia.png"
import africa from "./images/africa.png"
import america from "./images/america.png"
import europe from "./images/europe.png"
import australia from "./images/australia.png"


const HemisphereComponent = (props) => {
    var picture;
    if(props.lattitude > 0 && props.longitude > 45){
        picture = asia;
    }
    else if(props.lattitude < 30 && props.lattitude > -30 && props.longitude > -30 && props.longitude < 45){
        picture = africa;
    }
    else if(props.lattitude < 0 && props.lattitude > -45 && props.longitude > 110 && props.longitude < 180){
        picture = australia;
    }
    else if(props.lattitude < 90 && props.lattitude > -60 && props.longitude > -170 && props.longitude < -30){
        picture = america;
    }
    else if(props.lattitude > 30 && props.lattitude < 90 && props.longitude > -15 && props.longitude < 60){
        picture = europe;
    }
    else{
        picture = null;
    }
    return(
        <div>
            <h1> Your ISP location</h1>
            Lattitude:{props.lattitude}
            <br />
            Longitude:{props.longitude}
            <br />
            <center>
            <img src = {picture} alt="Error in geolocation mapper" height="500" width="500"/>
            </center>
        </div>  
        )
}

export default HemisphereComponent;
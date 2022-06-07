import React from "react";
import "./hemisphere.css"
import asia from "./images/asia.png"
import africa from "./images/africa.png"
import america from "./images/america.png"
import europe from "./images/europe.png"
import australia from "./images/australia.png"


const HemisphereComponent = (props) => {
    var picture;
    var continent;
    if(props.lattitude > 0 && props.longitude > 45){
        picture = asia;
        continent = 'Asia';
    }
    else if(props.lattitude < 30 && props.lattitude > -30 && props.longitude > -30 && props.longitude < 45){
        picture = africa;
        continent = "Africa";
    }
    else if(props.lattitude < 0 && props.lattitude > -45 && props.longitude > 110 && props.longitude < 180){
        picture = australia;
        continent = "Australia";
    }
    else if(props.lattitude < 90 && props.lattitude > -60 && props.longitude > -170 && props.longitude < -30){
        picture = america;
        continent = "America";
    }
    else if(props.lattitude > 30 && props.lattitude < 90 && props.longitude > -15 && props.longitude < 60){
        picture = europe;
        continent = "Europe";
    }
    else{
        picture = null;
        continent = " ";
    }
    
    return(
        <div>
            <center>
            <div class = "ui text container">
                <h1> Your ISP location</h1>
                Lattitude:{props.lattitude}
                <br />
                Longitude:{props.longitude}
                <br />  
            <div class = "ui link card">
                <div class = "image">
                    <img src = {picture} alt="Error in geolocation mapper"/>
                </div>
                <div class = 'content'>
                    {continent}
                </div>
                <div class = 'extra content'>
                    Lattitude : {props.lattitude}
                    <br />
                    Longitude : {props.longitude}
                </div>
            </div>
            </div>
            </center>
        </div>  
        )
}

export default HemisphereComponent;
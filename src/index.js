import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lattitude:null,longitude:null,errorMessage:''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    lattitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage:error.message
                })
            }
        )
    }
    render(){
        return(
            <div> <h1> Your ISP location</h1>
                Lattitude:{this.state.lattitude}
                <br />
                Longitude:{this.state.longitude}

                {this.state.errorMessage}
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

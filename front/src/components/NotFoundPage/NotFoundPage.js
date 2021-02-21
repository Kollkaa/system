import React, {Component} from 'react';
import HomePage from "../HomePage/HomePage";
import Banner from "../../image/banner_error_404.jpg"

class NotFoundPage extends Component{
    render() {
        return(
            <div style={{position:"relative",width:"100%",height:"100vh"}}>
                <div style={{position:"absolute",alignItems:"center",left:"23%",top:"27%"}}>
                    <img src={Banner}/>
                </div>
            </div>
        )
    }
}
export default NotFoundPage;

import React, {Component} from 'react';
import {getNavLinks} from  '../../api/queries'
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
           data:[]
        };

    }

    componentDidMount() {
        getNavLinks().then(responce=>{
            console.log(responce)
            this.setState({
                data: responce
            })
        })

    }

    render() {
        return(
        <div>
            {this.state.data.time}
        </div>
        )
    }
}
export default HomePage;

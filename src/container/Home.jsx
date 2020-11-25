import React, { Component } from 'react';
import HomeComp from '../component/HomeComp/HomeComp';

class Home extends Component {
    render(){
        return (
           <div>
                <HomeComp name='bagus 1'/>
                <HomeComp name='bagus 2'/>
                <HomeComp/>
           </div>
        )
    }
}

export default Home;
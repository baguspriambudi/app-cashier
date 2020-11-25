import React from 'react';

const HomeComp = (props)=>{
    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}

HomeComp.defaultProps = {
    name:'your name ?'
}

export default HomeComp;
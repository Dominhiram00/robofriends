import React from 'react';
//Children can wrap other components 
//overflowY is for JSX to get scroll

const Scroll = (props) =>{
    return(
        <div style = {{overflowY: 'scroll', border: '1px solider black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
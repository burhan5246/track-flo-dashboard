import React from 'react';

const StartSidebar = (props) => {
    return(
        <div className="start-sidebar">
            <p>“{props.text}“</p>
            <h4 style={{fontSize:'24px',color:'#fbfbfd'}}>Signup Today</h4>
        </div>
    )
}

export default StartSidebar;
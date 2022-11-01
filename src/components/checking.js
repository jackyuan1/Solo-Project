import React from 'react';

const Checking = (props) => {
    return (
        <div>
           <p>
            This is from checking.js
            </p> 
            <p>
                {props.apple}
            </p>
        </div>
    )
}

export default Checking
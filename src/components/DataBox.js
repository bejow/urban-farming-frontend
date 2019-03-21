import React from 'react';

export default (props) => {
    return(
        <div className='dataBoxContainer'>
            <p className='dataBoxLabel'>{props.label}</p>
            <div className='dataBoxHorizontal'>
                <i className='dataBoxIcon'>{props.icon}</i>
                <p className='dataBoxValue'>{props.value}</p>
            </div>
        </div>
    )
}
import React from 'react';
import Icon from './Icon';

export default (props) => {
    return (
        <div className="navLink">
            <Icon icon={props.icon}/>
            <p className='navLinkLabel'>{props.label}</p>
        </div>
    )
}
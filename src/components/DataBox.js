import React from 'react';
import Icon from './Icon';

export default (props) => {
    return(
        <div onClick={props.onClick} className='dataBoxContainer small'>
            <p className='dataBoxLabel'>{props.label}</p>
            <div className='dataBoxHorizontal'>
                <Icon color={props.color} icon={props.icon} size={50}/>
                <p className='dataBoxValue'>{props.value}</p>
            </div>
        </div>
    )
}
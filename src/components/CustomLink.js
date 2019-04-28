import React from 'react';
import Icon from './Icon';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        // <div className="navLink">
        //     <Icon icon={props.icon}/>
        //     <p className='navLinkLabel'>{props.label}</p>
        // </div>
        <NavLink to={props.to} className="navLink" activeClassName="selected" exact={props.exact ? true : false}>
            {/* <Icon icon={props.icon} color="#ffffff"/> */}
            <p className='navLinkLabel'>{props.label}</p>
        </NavLink>
    )
}
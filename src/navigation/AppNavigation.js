import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
    return (
        <div className='navigationContainer'>
            <Link to='/'>Home</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/overview'>Overview</Link>
        </div>
    )
}
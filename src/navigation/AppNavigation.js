import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavLink from '../components/NavLink';
import {ICONS} from '../constants/icons';

export default () => {
    return (
        <div className='navigationContainer'>
            <div className='navlinkContainer'>
            <Link to='/'>
                <NavLink icon={ICONS.HOME} label="Dashboard"/>
            </Link>
            <Link to='/data'>
                <NavLink icon={ICONS.DIAGRAMM} label={"Data & Details"}/>
            </Link>
            <Link to='/leaderboard'>
                <NavLink icon={ICONS.BADGE} label="Leaderboard"/>
            </Link>
            <Link to='/plan'>
                <NavLink icon={ICONS.PLAN} label={'Plan & Steps'}/>
            </Link>
            <Link to='/info'>
                <NavLink icon={ICONS.WORLD} label="Wait - what?"/>
            </Link>
            </div>
        </div>
    )
}
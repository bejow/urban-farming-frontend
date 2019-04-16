import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import {ICONS} from '../constants/icons';
import logo from '../images/logo.png';

export default () => {
    return (
        <div className='navigationContainer'>
            <div className='navlinkContainer'>
                <CustomLink exact to='/' icon={ICONS.HOME} label="Dashboard"/>
                <CustomLink to='/data' icon={ICONS.DIAGRAMM} label={"Data & Details"}/>
                <CustomLink to='/leaderboard' icon={ICONS.BADGE} label="Leaderboard"/>
                <CustomLink to='/login' icon={ICONS.BADGE} label="Login"/>
                <CustomLink to='/plan' icon={ICONS.PLAN} label={'Plan & Steps'}/>
                <CustomLink to='/info' icon={ICONS.WORLD} label="Wait - what?"/>
            </div>
            <img className='navLogo' src={logo}/>
        </div>
    )
}
import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import {ICONS} from '../constants/icons';
import logo from '../images/logo.png';

export default ({user}) => {
    return (
        <div className='navigationContainer'>
            <div className='navlinkContainer'>
                <CustomLink exact to='/' icon={ICONS.HOME} label="Dashboard"/>
                <CustomLink to='/data' icon={ICONS.DIAGRAMM} label={"Data & Details"}/>
                <CustomLink to='/leaderboard' icon={ICONS.BADGE} label="Leaderboard"/>
                <CustomLink to='/plan' icon={ICONS.PLAN} label={'Plan & Steps'}/>
                <CustomLink to='/info' icon={ICONS.WORLD} label="Explanations"/>
                <CustomLink to='/service' icon={ICONS.MAN} label={"Service & Help"}/>
                <CustomLink to='/settings' icon={ICONS.SETTINGS} label="Settings"/>
            </div>
            <img className='navLogo' src={logo}/>
        </div>
    )
}

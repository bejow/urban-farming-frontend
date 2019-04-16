import React from 'react';
import Icon from './Icon';
import {ICONS} from '../constants/icons';

export default (props) => {
    const {rank, name, position, value} = props
    return(
        <div className='listItemContainer'>
            <div className='horizontalWrapper'>
                <p className='rankText'>{rank}</p>
                <div className='leaderboardNameContainer'>
                    <p className='listItemText'>{name}</p>
                    <p className='positionText'>{position}</p>
                </div>
            </div>
            <div className='leaderboardValueContainer'>
                <Icon icon={ICONS.HEART} size={30} color="#2a7800"/>
                <p className='listItemText'>{value}</p>
            </div>
        </div>
    )
}
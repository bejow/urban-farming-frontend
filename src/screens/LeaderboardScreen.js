import React from 'react';
import {Leaderboard} from '../components/Leaderboard';
import {LEADERBOARD_DATA} from '../constants/data';
import CompetitionBox from '../components/CompetitionBox';

export default class OverviewScreen extends React.Component{
    render(){
        return(
            <div className='contentContainer'>
                <h1>Our best supporters</h1>
                <div className='horizontalWrapper'>
                <Leaderboard data={LEADERBOARD_DATA}/>
                <CompetitionBox daysLeft={5}/>
                </div>
            </div>
        )
    }
}
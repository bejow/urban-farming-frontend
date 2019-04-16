import React from 'react';
import competitionIcon from '../images/competition_icon.png'
export default (props) => {
    return(
        <div className='competitionBoxContainer'>
            <p className='competitionHeaderText'>Current competition</p>
            <div className='horizontalWrapper'>
                <img src={competitionIcon}/>
                <div style={{marginLeft:10}}>
                    <p className='competitionDaysText'>{props.daysLeft} days left</p>
                    <p className='competitionDescriptionText'>1 and 2 go for a free lunch<br/>
                    of choice together</p>
                </div>
            </div>
        </div>
    )
}
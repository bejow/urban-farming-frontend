import React from 'react';
import MyAreaChart from './MyAreaChart';

export default (props) => {
    return (
            <MyAreaChart area={props.area} data={props.data}/>
    )
}
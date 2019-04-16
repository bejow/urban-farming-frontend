import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import {ENERGY_PRODUCTION_LABEL,ENERGY_PRODUCTION_TITLE} from '../constants/strings';

export default (props) => {
    return(
        <div className="dataBoxContainer medium horizontal">
            <div style={{paddingRight:20}}>
                <h2>{ENERGY_PRODUCTION_TITLE}</h2>
                <p>{ENERGY_PRODUCTION_LABEL}</p>
            </div>
            <div className="chart medium">
                <CircularProgressbar
                    percentage={props.value}
                    text={`${props.value} %`}
                    styles={{
                        path: {stroke:'#417505'},
                        text: {fill:'#4a4a4a'}
                    }}
                />
            </div>
        </div>
    )
}
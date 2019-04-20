import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import {ENERGY_PRODUCTION_LABEL,ENERGY_PRODUCTION_TITLE} from '../../constants/strings';
import styles from './EnergyProductionBox.module.css';
import SALAD_WALL_ICON from '../../images/salad_wall.png';
import ARROW_ICON from '../../images/arrow_icon.png';

export default (props) => {
    const {area} = props;
    return(
        <div className={styles.energyBoxContainer + " " + area}>
            <div className={styles.textContainer}>
                <h2 className={styles.titleText}>{ENERGY_PRODUCTION_TITLE}</h2>
                <p className={styles.text}>{ENERGY_PRODUCTION_LABEL}</p>
            </div>
            <div className={styles.chartWrapper}>
                <div className={styles.chart}>
                    <CircularProgressbar
                        percentage={props.value}
                        text={`${props.value} %`}
                        styles={{
                            path: {stroke:'#417505'},
                            text: {fill:'#4a4a4a'}
                        }}
                    />
                </div>
                <img className={styles.saladWallImage} src={SALAD_WALL_ICON}/>
                <img className={styles.iconStyle} src={ARROW_ICON}/>            
            </div>
        </div>
    )
}
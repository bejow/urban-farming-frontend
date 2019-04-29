import React from 'react';
import TimePicker from 'react-times';   
import styles from './TimeSpanPicker.module.css';
import Icon from '../Icon';
import {ICONS} from '../../constants/icons'


export default function TimeSpanPicker(props) {
  return (
    <div className={styles.container}>
        
        <div className={styles.timePickerContainer}>
            <TimePicker time={props.startTime} onTimeChange={props.onStartTimeChange}/>
        </div>
            <Icon icon={ICONS.ARROW_RIGHT} size={30}/>
        <div className={styles.timePickerContainer}>
            <TimePicker time={props.stopTime} onTimeChange={props.onStopTimeChange}/>
        </div>
        <img className={styles.icon} src={props.icon} onClick={props.onIconClick}/>
    </div>
  )
}

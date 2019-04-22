import React from 'react';
import Icon from '../Icon';
import styles from './DataBox.module.css'

export default (props) => {
    const {backgroundColor, fontColor, icon, image, area} = props;
    const boxStyle = backgroundColor ? {backgroundColor: backgroundColor} : {backgroundColor: "#246328"}
    const textStyle = fontColor ? {color: fontColor} : {color: 'white'}
    const symbol = icon 
    ? <Icon color={props.iconColor} icon={props.icon} size={50}/> 
    : image 
    ? <img className={styles.image} src={image}/>
    : null

    return(
        <div 
            onClick={props.onClick}
            style={boxStyle}
            className={styles.dataBoxContainer + " " + area}
        >
            <p style={textStyle} className={styles.dataBoxLabel}>{props.label}</p>
            <div className={styles.dataBoxHorizontal}>
                {symbol}
                <p style={textStyle} className={styles.dataBoxValue}>{props.value}</p>
            </div>
        </div>
    )
}
import React from 'react';
import styles from './InfoBox.module.css';
import ARROW_ICON from '../../images/arrow_icon.png';

export default (props) => {
    const {image, area, children, onClick} = props;
    return (
        <div onClick={onClick} className={styles.article + " " + area}>
            {image ? <img className={styles.image} src={image}/> : null}
            <div className={styles.textContainer}>
               {children}
            </div>
            <img className={styles.iconStyle} src={ARROW_ICON}/>
        </div>
    )
}

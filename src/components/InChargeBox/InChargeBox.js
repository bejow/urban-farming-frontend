import React from 'react';
import styles from './InChargeBox.module.css';
import ARROW_ICON from '../../images/arrow_icon.png';

export default function InChargeBox(props) {
    const {area, backgroundColor, title, text, subTitle, listItems, onClick} = props
    console.log(props)
    return (
        <div onClick={onClick} style={{backgroundColor}} className={styles.container + " " + area}>
                <p className={styles.text}>{subTitle}</p>
                <h1 className={styles.title}>{title}</h1>
                { text ? <p className={styles.text}>{text}</p> : null}
                <ul className={styles.list}>
                    {listItems.map( item => <li><p className={styles.text}>{item}</p></li>)}
                </ul>
                <img className={styles.iconStyle} src={ARROW_ICON}/>
        </div>
    )
}

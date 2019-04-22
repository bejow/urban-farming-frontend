import React from 'react'
import styles from './MonthPicker.module.css'

export default function MonthPicker(props) {
    const {selected, onPick} = props;
    return (
        <div className={styles.container}>
            <p onClick={() => onPick("March")} className={selected == "March" ? styles.selected : styles.text}>March</p>
            <p onClick={() => onPick("April")} className={selected == "April" ? styles.selected : styles.text}>April</p>
            <p onClick={() => onPick("May")} className={selected == "May" ? styles.selected : styles.text}>May</p>
            <p onClick={() => onPick("June")} className={selected == "June" ? styles.selected : styles.text}>June</p>
        </div>
    )
}

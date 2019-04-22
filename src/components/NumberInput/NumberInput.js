import React from 'react';
import styles from './NumberInput.module.css'

export default (props) => (
    <div className={styles.inputContainer}>
        <label>
            {props.label}
            <input onChange={props.onChange} type="number" name={props.name} value={props.value}/>
        </label>
    </div>
)
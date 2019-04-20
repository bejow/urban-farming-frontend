import React from 'react';
import styles from './PlanEntry.module.css';

export default function PlanEntry(props) {
    const {names, tasks, day} = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.titleText}>{day}</h1>
            <div className={styles.itemContainer}>
                {names.map( (name, index) => <p className={styles.nameText} key={name+index}>{name}</p>)}
            </div>
            <ul className={styles.taskBox}>
                {tasks.map( (task, index) => <li key={task+index}><p className={styles.taskText}>{task}</p></li>)}
            </ul>
        </div>
  )
}

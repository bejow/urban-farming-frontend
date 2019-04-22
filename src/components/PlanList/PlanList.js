import React from 'react'
import styles from './PlanList.module.css';
import { PlanEntry } from '../PlanEntry';

// exampleData = [
//     {
//         day:"Today",
//         names: ["tiffany", "john"],
//         tasks: ["Oxygen refill", "Toilett refill"]
//     }
// ]
export default function PlanList(props) {
    return (
        <div className={styles.listContainer}>
            {props.data.map((entry, index) => <PlanEntry names={entry.names} tasks={entry.tasks} day={entry.day}/>)}
        </div>
    )
}

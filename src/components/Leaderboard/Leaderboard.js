import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './Leaderboard.module.css'

export default (props) => {
    const rows = Object.values(props.data)
    .sort((a, b) => { return b.value - a.value})
    .map((row, index) =>
        <ListItem 
            rank={index + 1}
            value={row.value}
            name={row.name}
            position={row.position}
        />
    )
    return(
        <ul className={styles.leaderboardContainer}>
            {rows}
        </ul>
    )
}
import React from 'react';
import ListItem from './ListItem';

export default (props) => {
    const rows = Object.values(props.data)
    .sort((a, b) => a.rank > b.rank)
    .map((row, index) =>
        <ListItem 
            rank={row.rank}
            value={row.value}
            name={row.name}
            position={row.position}
        />
    )
    console.log(rows)
    return(
        <ul className="leaderboardContainer">
            {rows}
        </ul>
    )
}
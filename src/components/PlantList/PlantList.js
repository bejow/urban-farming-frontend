import React from 'react'
import styles from './PlantList.module.css'
import { PlantEntry } from '../PlantEntry';

export default function PlantList(props) {
    const {data, searchValue, onSearchChange, onPlantInfoClick} = props;
    var entriesToBeRendered = data.map( (entry, index) => {
        console.log("eeeeeeeeeentasd", entry)
        if (entry.name.toLowerCase().includes(searchValue.toLowerCase())){
            return <PlantEntry onClick={() => onPlantInfoClick(entry.id)} name={entry.name} description={entry.description}/>
        }
    })

    return (
        <div className={styles.container}>
            <input placeholder="&#61442;  Search" className={styles.search} onChange={onSearchChange} value={searchValue}/>
            {entriesToBeRendered}
        </div>
    )
}

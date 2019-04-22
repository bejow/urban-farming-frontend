import React from 'react'
import styles from './PlantEntry.module.css'
import ROUND_SALAD1 from '../../images/round_salad1.png';
import ROUND_SALAD2 from '../../images/round_salad2.png';
import ROUND_SALAD3 from '../../images/round_salad3.png';
import ROUND_SALAD4 from '../../images/round_salad4.png';
import ROUND_SALAD5 from '../../images/round_salad5.png';
import ARROW_ICON from '../../images/arrow_icon.png'
export default function PlantEntry(props) {
    const images = [ROUND_SALAD1, ROUND_SALAD2, ROUND_SALAD3, ROUND_SALAD4, ROUND_SALAD5];
    const image = images[Math.floor(Math.random()*images.length)]
    const {name, description, onClick} = props;
    return (
        <div onClick={onClick} className={styles.container}>
            <img src={image} className={styles.image}/>
            <div className={styles.descriptionContainer}>
                <h1 className={styles.nameText}>{name}</h1>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <img src={ARROW_ICON} className={styles.icon}/>
        </div>
    )
}

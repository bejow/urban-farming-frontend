import React from 'react'
import styles from './StarRating.module.css';
import STAR from '../../images/star.png';
import STAR_GREY from '../../images/star_grey.png';

export default function StarRating(props) {
    const {numStars, value, onClick} = props;
    let stars = []
    for (let i = 0; i < numStars; i++){
        if ( i < value ){
            stars.push(<img src={STAR} onClick={() => onClick(i+1)}/>)
        }
        else{
            stars.push(<img src={STAR_GREY} onClick={() => onClick(i+1)}/>)
        }
    }
    return (
        <div className={styles.container}>
            {stars}
        </div>
    )
}

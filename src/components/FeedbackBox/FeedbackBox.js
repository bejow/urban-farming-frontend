import styles from './FeedbackBox.module.css';
import React from 'react'
import StarRating from '../StarRating/StarRating';

export default function FeedbackBox(props) {
    const {value, onStarClick, numStars} = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tell us how it’s going!</h1>
            <p className={styles.text}>How would you rate your overall experience with your Rowa lettuce-system so far?</p>
        <StarRating value={value} numStars={numStars} onClick={onStarClick}/>
            <p className={styles.starCountText}>{value + " of " + numStars}</p>
        </div>
    )
}

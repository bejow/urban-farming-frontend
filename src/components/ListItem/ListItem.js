import React from 'react';
import Icon from '../Icon';
import {ICONS} from '../../constants/icons';
import styles from './ListItem.module.css';

export default (props) => {
    const {rank, name, position, value} = props
    return(
        <div className={styles.listItemContainer}>
            <div className={styles.horizontalWrapper}>
                <h1 className={styles.rankText}>{rank}.</h1>
                <div className={styles.leaderboardNameContainer}>
                    <p className={styles.listItemText}>{name}</p>
                    <p className={styles.positionText}>{position}</p>
                </div>
            </div>
            <div className={styles.leaderboardValueContainer}>
                <Icon icon={ICONS.HEART} size={30} color="#2a7800"/>
                <p className={styles.listItemText}>{value}</p>
            </div>
        </div>
    )
}


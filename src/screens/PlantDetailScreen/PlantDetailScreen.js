import React from 'react';
import styles from './PlantDetailScreen.module.css';
import CHICORY_IMG from '../../images/chicory.png'
import DROPLET_ICON from '../../images/droplet.png'
import CLOCK_ICON from '../../images/clock.png'
import SUN_ICON from '../../images/sun.png'
import LEAF_ICON from '../../images/leaf.png'
import ARROW_ICON from '../../images/arrow_back_icon.png'

import {
    PLANT_CHARACTERISTIC_INFO,
    PLANT_NAME_INFO,
    PLANT_SEASON_INFO,
    PLANT_SUBTITLE,
    PLANT_SUN_INFO,
    PLANT_TIME_INFO,
    PLANT_WATER_INFO,
    PLANT_TITLE
} from '../../constants/data';

export default class PlantDetailScreen extends React.Component{
    //wenn wirklich implementiert: id aus den route params und damit daten fetchen
    componentDidMount(){
        const {match: { params}} = this.props
        console.log(params.id)
    }
    render(){
        return(
            <div className='contentContainer'>
                <div className={styles.container}>
                <img onClick={ () => this.props.history.goBack()}className={styles.backButton} src={ARROW_ICON}/>
                    <img src={CHICORY_IMG} className={styles.image}/>
                    <h1 className={styles.title}>{PLANT_TITLE}</h1>
                    <p className={styles.text}>{PLANT_SUBTITLE}</p>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoField}>
                            <img className={styles.icon} src={DROPLET_ICON}/>
                            <p className={styles.text}>{PLANT_WATER_INFO}</p>
                        </div>
                        <div className={styles.infoField}>
                            <img className={styles.icon} src={SUN_ICON}/>
                            <p className={styles.text}>{PLANT_SUN_INFO}</p>
                        </div>
                        <div className={styles.infoField}>
                            <img className={styles.icon} src={LEAF_ICON}/>
                            <p className={styles.text}>{PLANT_SEASON_INFO}</p>
                        </div>
                        <div className={styles.infoField}>
                            <img className={styles.icon} src={CLOCK_ICON}/>
                            <p className={styles.text}>{PLANT_TIME_INFO}</p>
                        </div>
                    </div>
                    <p className={styles.infoText}>{PLANT_NAME_INFO}</p>
                    <p className={styles.infoText}>{PLANT_CHARACTERISTIC_INFO}</p>
                </div>
            </div>
        )
    }
}
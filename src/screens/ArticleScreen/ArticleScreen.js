import React from 'react';
import styles from './ArticleScreen.module.css';
import {ARTICLE_TEXT, ARTICLE_TITLE} from '../../constants/data';
import HYDROPONICS_IMG from '../../images/hydroponics2.png'
export default class ArticleScreen extends React.Component{
    //wenn wirklich implementiert: id aus den route params und damit daten fetchen
    componentDidMount(){
        const {match: { params}} = this.props
        console.log(params.id)
    }
    render(){
        return(
            <div className='contentContainer'>
                <div className={styles.container}>
                    <img src={HYDROPONICS_IMG} className={styles.image}/>
                    <h1 className={styles.title}>{ARTICLE_TITLE}</h1>
                    <p className={styles.text}>{ARTICLE_TEXT}</p>
                </div>
            </div>
        )
    }
}
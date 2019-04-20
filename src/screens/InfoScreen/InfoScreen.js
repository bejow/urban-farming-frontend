import React from 'react';
import {Redirect} from 'react-router-dom';
import styles from './InfoScreen.module.css';
import { InfoBox } from '../../components/InfoBox';
import HYDROPONICS_PIC from '../../images/hydroponics.png';
export default class InfoScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirectToArticle: false
        }
    }

    onArticleClick = (articleId) => this.setState( {redirectToArticle:articleId})

    render(){

        if (this.state.redirectToArticle){
            return <Redirect to={`/info/article/${this.state.redirectToArticle}`}/>
        }

        return(
            <div className='contentContainer'>
                <div className={styles.contentGrid}>
                    <InfoBox 
                        area={styles.big} 
                        image={HYDROPONICS_PIC}
                        title="Wait what - there is no soil?"
                        text="Hydroponics, by definition, is a method of growing plants in a water based, nutrient rich solution. Hydroponics does not use soil, instead the root system is supported using an inert medium such as perlite, rockwool, clay pellets, peat moss, or vermiculite. […]"
                        onClick={() => this.onArticleClick("42")}
                    />
                    <InfoBox 
                        area={styles.small1} 
                        title="Oxygen, pH value, light, pump – what is it all for?"
                    />
                    <InfoBox 
                        area={styles.small2} 
                        title="Check your greens here!"
                        text="Here you can find information about the lettuce grown in your system, but you can also check other lettuces and potential things to plant!"
                    />
                    <div className={styles.article + " " + styles.small1}>
                    </div>
                    <div className={styles.article + " " + styles.small2}>
                    </div>
                </div>
            </div>
        )
    }
}
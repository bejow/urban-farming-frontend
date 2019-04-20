import React from 'react';
import {Redirect} from 'react-router-dom';
import styles from './PlantInfoScreen.module.css';
import { PlantList } from '../../components/PlantList';
import {PLANT_LIST_DATA} from '../../constants/data';

export default class PlantInfoScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            redirectToPlantInfo: false,
            selectedPlants: "All Greens"
        }
    }

    onSearchValueChange = (event) => this.setState( {searchValue:event.target.value});

    onPlantInfoClick = (plantId) => this.props.history.push(`${this.props.match.url}/${plantId}`);

    render(){

        if (this.state.redirectToPlantInfo){
            return <Redirect to={`/info/plants/${this.state.redirectToPlantInfo}`}/>
        }

        return(
            <div className='contentContainer'>
                <div className={styles.container}>
                    <p onClick={() => this.setState({selectedPlants: "All Greens"})} className={this.state.selectedPlants == "All Greens" ? styles.selected : styles.text}>All Greens</p>
                    <p onClick={() => this.setState({selectedPlants: "Your Greens"})} className={this.state.selectedPlants == "Your Greens" ? styles.selected : styles.text}>Your Greens</p>
                </div>
                <PlantList data={PLANT_LIST_DATA} searchValue={this.state.searchValue} onSearchChange={this.onSearchValueChange} onPlantInfoClick={this.onPlantInfoClick}/>
            </div>
        )
    }
}
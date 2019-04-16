import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {connect} from 'react-redux';
import {RingSpinner} from 'react-spinners-kit';

import {ICONS} from '../constants/icons';
import {WATER_CONSUMPTION_DATA} from '../constants/data';

import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings} from '../actions'

import DataBox from '../components/DataBox';
import ColumnChart from '../components/ColumnChart';
import LineChart from '../components/LineChart';
import EnergyProductionBox from '../components/EnergyProductionBox';
import WaterConsumptionBox from '../components/WaterConsumptionBox';

class DashboardScreen extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getCurrentOxygen();
        this.props.getCurrentPH();
        this.props.getCurrentTemperature();
        this.props.getSettings();
    }


    render(){
        const {currentPH, currentOxygen, currentTemperature, settings, loading, status, error} = this.props

        if ( loading ) {
            return(
                <div style={{position:'absolut', left:'50%', top:'50%'}}>
                    <RingSpinner size={50}
                    color="#686769"
                    loading={loading}/>
                </div>
            )
        }
        else if (error) {
            return <p className='errorText'>{status}</p>
        }
        else if (currentPH && currentTemperature){
            return(
                <div className='contentContainer'>
                    <h1>Home</h1>
                    <DataBox 
                        label="Water Usage" 
                        value='4.3 liters' 
                        color="blue"
                        icon={ICONS.DROPLET}
                    />
                    <DataBox 
                        label="Electricity Usage" 
                        value='134 Watt' 
                        icon={ICONS.LIGHTNING}
                        color='yellow'
                    />
                    <DataBox 
                        label="Temperature" 
                        value={`${currentTemperature[0].value} °C`} 
                        color='red'
                        icon={ICONS.FIRE}
                    />
                    <DataBox 
                        label="PH" 
                        value={currentPH[0].value}
                        color='green'
                        icon={ICONS.CHEMICAL}
                    />                           
                    <ColumnChart/>
                    <LineChart/>
                    <EnergyProductionBox value={42} />
                    <WaterConsumptionBox data={WATER_CONSUMPTION_DATA} width="45%"/>
                </div>
            )
        }
        else{
            return(
                <p>this is shitty programmed</p>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        loading: state.api.loading,
        currentOxygen: state.api.currentOxygen,
        currentPH: state.api.currentPH,
        currentTemperature: state.api.currentTemperature,
        error: state.api.error,
        status: state.api.status,
        settings: state.api.settings,
    }
}

export default connect(mapStateToProps, {getCurrentOxygen, getCurrentPH, getCurrentTemperature, getSettings})(DashboardScreen);
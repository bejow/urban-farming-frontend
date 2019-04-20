import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {connect} from 'react-redux';
import {RingSpinner} from 'react-spinners-kit';

import {ICONS} from '../../constants/icons';
import {WATER_CONSUMPTION_DATA} from '../../constants/data';

import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings} from '../../actions'

import {DataBox} from '../../components/DataBox';
import ColumnChart from '../../components/ColumnChart';
import LineChart from '../../components/LineChart';
import EnergyProductionBox from '../../components/EnergyProductionBox/EnergyProductionBox';
import WaterConsumptionBox from '../../components/WaterConsumptionBox';
import styles from './DataScreen.module.css';

class DataScreen extends React.Component{
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
                    <div className={styles.contentGrid}>
                        <ColumnChart area={styles.box3}/>
                        <LineChart area={styles.box1}/>
                        <EnergyProductionBox area={styles.longBox2} value={42} />
                        <WaterConsumptionBox area={styles.longBox1} data={WATER_CONSUMPTION_DATA} width="45%"/>
                    </div>
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

export default connect(mapStateToProps, {getCurrentOxygen, getCurrentPH, getCurrentTemperature, getSettings})(DataScreen);
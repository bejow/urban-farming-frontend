import React from 'react';
import {connect} from 'react-redux'
import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings} from '../../actions'
import { RingSpinner } from 'react-spinners-kit'
import { DataBox } from '../../components/DataBox';
import PLANT_ICON from '../../images/plant_icon.png';
import FOOD_ICON from '../../images/food_icon.png';
import GROUP_ICON from '../../images/group_icon.png';
import TEMPERATURE_ICON from '../../images/temperature_icon.png';
import ALL_GOOD_IMAGE from '../../images/allgood.png';
import CRITICAL_IMAGE from '../../images/critical.png'
import styles from './DashboardScreen.module.css';
import {EnergyProductionBox} from '../../components/EnergyProductionBox';
import { InChargeBox } from '../../components/InChargeBox';


class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getCurrentOxygen();
        this.props.getCurrentPH();
        this.props.getCurrentTemperature();
        //this.props.getSettings();
    }

    renderImage(){
        //check for allgood props from redux state, not implemented yet
        const allgood = Math.random() >= 0.5;
        if (allgood){
            return <img className={styles.image} src={ALL_GOOD_IMAGE}/>
        }
        else {
            return <img className={styles.image} src={CRITICAL_IMAGE}/>
        }
    }

    renderData(){
        const {loading, error, status, currentOxygen, currentPH, currentTemperature} = this.props;
        if (loading){
            return(
            <div style={{position:'absolut', left:'50%', top:'50%'}}>
            <RingSpinner size={50}
            color="#686769"
            loading={loading}/>
            </div>
            )
        }
        else if(error){
            return <p className='errorText'>{status}</p>
        }
        else if (currentOxygen && currentPH && currentTemperature ){
            return (
                <div className={styles.contentGrid}>
                    <DataBox 
                        label="Current temperature in °C"
                        image={TEMPERATURE_ICON}
                        value={currentTemperature[0].value}
                        backgroundColor="#f9e01b"
                        area={styles.box1}
                    />
                    <DataBox 
                        label="How long until the next harvest?"
                        image={FOOD_ICON}
                        value="1 day"
                        backgroundColor="#f0bd5c"
                        area={styles.box2}
                    />
                    <DataBox 
                        label="The next team lunch is on ..."
                        image={GROUP_ICON}
                        value="3.6."
                        backgroundColor="#124358"
                        area={styles.box3}
                    />
                    <DataBox 
                        label="Lettuces harvested since the beginning..."
                        image={PLANT_ICON}
                        value="28"
                        backgroundColor="#f9e01b"
                        area={styles.box4}
                    />
                    <InChargeBox
                        backgroundColor="#edf2a4"
                        area={styles.boxBig}
                        subTitle="Today, in charge of us are"
                        title={"Elisa B. & Chris Z."}
                        text={"What is up?"}
                        listItems={["Check if the pH is okay", "Refill the fertilizer", "Check the nursery"]}
                    />
                    {this.renderImage()}
                    <EnergyProductionBox area={styles.banner} value={42} />
                </div>    
            )
        }
    }

    renderSettings(){
        const {settings} = this.props
        if (settings){
            return Object.keys(settings).map(key => {return <p>{key}: {settings[key]}</p>});
        }
    }

    render(){
        return(
            <div className='contentContainer'>
                {this.renderData()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.api.loading,
        error: state.api.error,
        status: state.api.status,
        currentOxygen: state.api.currentOxygen,
        currentPH: state.api.currentPH,
        currentTemperature: state.api.currentTemperature,
        settings: state.api.settings,
    }
}

export default connect(mapStateToProps, {getCurrentOxygen, getCurrentPH, getCurrentTemperature, getSettings})(OverviewScreen);
import React from 'react';
import {connect} from 'react-redux'
import { RingSpinner } from 'react-spinners-kit'
// use material theme
import 'react-times/css/material/default.css';
import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from 'react-circular-input'
import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings, onChangeSettings} from '../../actions'
import {NumberInput} from '../../components/NumberInput';
import styles from './SettingsScreen.module.css';
import SETTINGS_ICON from '../../images/settings_icon.png'
import { TimeSpanPicker } from '../../components/TimeSpanPicker';
import PLUS_ICON from '../../images/plus.png';
import MINUS_ICON from '../../images/minus.png';
import {DEFAULT_TIMESPAN,LIGHT_TIP, WATER_TIP, HERB_TIMESPAN, LEAFY_TIMESPAN, NIGHT_TIMESPAN} from '../../constants/data';


class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
        console.log("myyyyyyyy props", props)
        this.state = {
            lightTime: props.settings.light_time,
            noLightTime: props.settings.no_light_time,
            waterTime: props.settings.water_time,
            noWaterTime: props.settings.no_water_time,
            selectedSetting: "herb",
            waterIntervals: {1: HERB_TIMESPAN},
            lightIntervals: {1: HERB_TIMESPAN}
        }
    }

    findHighestKey(object){
        return Math.max(...Object.keys(object))
    }

    onAddInterval(type){
        const heighestKey = parseInt(this.findHighestKey(this.state[type]));
        this.setState({
            [type]: {...this.state[type], [heighestKey+1]: DEFAULT_TIMESPAN}
        })
    }

    onDeleteInterval(type, intervalKey){
        var intervalsCopy = this.state[type]
        delete intervalsCopy[intervalKey];
        this.setState({
            [type]: intervalsCopy
        });
    }

    onStartTimeChange = (options, type, intervalKey) => {
        console.log("ooooooptions", options);
        console.log("intervaaaal", intervalKey);
        const intervalsCopy = this.state[type]
        this.setState({
            [type]: {...this.state[type], [intervalKey]: {...this.state[type][intervalKey], start: options}}
        })
    }

    onStopTimeChange = (options, type, intervalKey) => {
        this.setState({
            [type]: {...this.state[type], [intervalKey]: {...this.state[type][intervalKey], stop: options}}
        })
    }
    
    componentDidMount(){
        this.props.getCurrentOxygen();
        this.props.getCurrentPH();
        this.props.getCurrentTemperature();
        this.props.getSettings();
    }

    renderWaterIntervalPicker(){
        const {waterIntervals} = this.state;
        return Object.keys(waterIntervals).map( (intervalKey, index) => (
            <TimeSpanPicker 
                startTime={`${waterIntervals[intervalKey].start.hour}:${waterIntervals[intervalKey].start.minute}`}
                stopTime={`${waterIntervals[intervalKey].stop.hour}:${waterIntervals[intervalKey].stop.minute}`}
                onStartTimeChange={(options) => this.onStartTimeChange(options, "waterIntervals", intervalKey)}
                onStopTimeChange={(options) => this.onStopTimeChange(options, "waterIntervals", intervalKey)}
                icon = { index == 0 ? PLUS_ICON : MINUS_ICON}
                onIconClick = { index == 0 ? () => this.onAddInterval('waterIntervals') : () => this.onDeleteInterval('waterIntervals', intervalKey)}
            />
        ))
    }

    renderLightIntervalPicker(){
        const {lightIntervals} = this.state;
        return Object.keys(lightIntervals).map( (intervalKey, index) => (
            <TimeSpanPicker 
                startTime={`${lightIntervals[intervalKey].start.hour}:${lightIntervals[intervalKey].start.minute}`}
                stopTime={`${lightIntervals[intervalKey].stop.hour}:${lightIntervals[intervalKey].stop.minute}`}
                onStartTimeChange={(options) => this.onStartTimeChange(options, "lightIntervals", intervalKey)}
                onStopTimeChange={(options) => this.onStopTimeChange(options, "lightIntervals", intervalKey)}
                icon = { index == 0 ? PLUS_ICON : MINUS_ICON}
                onIconClick = { index == 0 ? () => this.onAddInterval('lightIntervals') : () => this.onDeleteInterval('lightIntervals', intervalKey)}
            />
        ))
    }

    renderData(){
        console.log(this.state)
        const {loading, error, status, currentOxygen, currentPH, currentTemperature, localSettings, onChangeSettings} = this.props;
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
                <div className={styles.container}>
                    
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

    renderOptions(){
        return(
            <div className={styles.optionContainer}>
                <div 
                    onClick={ 
                        () => {
                            this.setState({
                                selectedSetting: "night", 
                                lightIntervals: {1: NIGHT_TIMESPAN},
                                waterIntervals: {1: NIGHT_TIMESPAN}
                            })
                        }
                    } 
                    className={`${styles.option} ${this.state.selectedSetting=="night" ? styles.active : null}`}>
                    Night mode - do not disturbe
                </div>
                <div    
                    onClick={ 
                        () => {
                            this.setState({
                                selectedSetting: "leafy", 
                                lightIntervals: {1: LEAFY_TIMESPAN},
                                waterIntervals: {1: LEAFY_TIMESPAN}
                            })
                        }
                    }  
                    className={`${styles.option} ${this.state.selectedSetting=="leafy" ? styles.active : null}`}>
                    Ideal care for leafy greens
                </div>
                <div                    
                    onClick={ 
                        () => {
                            this.setState({
                                selectedSetting: "herb", 
                                lightIntervals: {1: HERB_TIMESPAN},
                                waterIntervals: {1: HERB_TIMESPAN}
                            })
                        }
                    } 
                    className={`${styles.option} ${this.state.selectedSetting=="herb" ? styles.active : null}`}>
                    Ideal car for herbs
                </div>
            </div>
            )
    }

    render(){
        return(
            <div className='contentContainer'>
                <div className={styles.container}>
                    <h1>Default setting</h1>
                    <img className={styles.icon} src={SETTINGS_ICON}/>
                    {this.renderOptions()}
                    <div className={styles.intervalsContainer}>
                        <h1 className={styles.title}>Set your light intervalls</h1>
                        <p className={styles.text}>{LIGHT_TIP}</p>
                        {this.renderLightIntervalPicker()}
                    </div>
                    <div className={styles.intervalsContainer}>
                        <h1 className={styles.title}>Set your pump intervalls</h1>
                        <p className={styles.text}>{WATER_TIP}</p>
                        {this.renderWaterIntervalPicker()}
                    </div>
                    {/* {this.renderData()} */}
                    <div>
                        {/* {this.renderSettings()} */}
                    </div>
                </div>
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
        localSettings :state.app.localSettings
    }
}

export default connect(mapStateToProps, {getCurrentOxygen, getCurrentPH, getCurrentTemperature, getSettings, onChangeSettings})(OverviewScreen);
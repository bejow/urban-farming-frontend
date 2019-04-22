import React from 'react';
import {connect} from 'react-redux'
import { RingSpinner } from 'react-spinners-kit'
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



class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
        console.log("myyyyyyyy props", props)
        this.state = {
            lightTime: props.settings.light_time,
            noLightTime: props.settings.no_light_time,
            waterTime: props.settings.water_time,
            noWaterTime: props.settings.no_water_time,
            selectedSetting: ""
        }
    }

    componentDidMount(){
        this.props.getCurrentOxygen();
        this.props.getCurrentPH();
        this.props.getCurrentTemperature();
        this.props.getSettings();
    }

    onChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    onClick={ () => this.setState({selectedSetting: "night"})} 
                    className={`${styles.option} ${this.state.selectedSetting=="night" ? styles.active : null}`}>
                    Night mode - do not disturbe
                </div>
                <div    
                    onClick={ () => this.setState({selectedSetting: "leafy"})} 
                    className={`${styles.option} ${this.state.selectedSetting=="leafy" ? styles.active : null}`}>
                    Ideal care for leafy greens
                </div>
                <div                    
                    onClick={ () => this.setState({selectedSetting: "herb"})} 
                    className={`${styles.option} ${this.state.selectedSetting=="herb" ? styles.active : null}`}>
                    Ideal car for herbs
                </div>
            </div>
            )
    }

    render(){
        console.log(this.props)
        return(
            <div className='contentContainer'>
                <div className={styles.container}>
                    <h1>Default setting</h1>
                    <img className={styles.icon} src={SETTINGS_ICON}/>
                    {this.renderOptions()}
                    {this.renderData()}
                    <div>
                        {this.renderSettings()}
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
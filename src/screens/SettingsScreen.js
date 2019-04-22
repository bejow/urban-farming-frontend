import React from 'react';
import {connect} from 'react-redux'
import { RingSpinner } from 'react-spinners-kit'
import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from 'react-circular-input'
import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings, onChangeSettings} from '../actions'
import {NumberInput} from '../components/NumberInput';




class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
        console.log("myyyyyyyy props", props)
        this.state = {
            lightTime: props.settings.light_time,
            noLightTime: props.settings.no_light_time,
            waterTime: props.settings.water_time,
            noWaterTime: props.settings.no_water_time
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
                <div>
                    <p>Oxygen:</p>
                    <p>{currentOxygen[0].value}</p>
                    <p>PH:</p>
                    <p>{currentPH[0].value}</p>
                    <p>Temperature:</p>
                    <p>{currentTemperature[0].value}°C</p>
                    <NumberInput 
                        name="light_time"
                        label="Light Time"
                        onChange={onChangeSettings} 
                        value={localSettings.light_time}
                    />
                    <NumberInput 
                        name="no_light_time"
                        label="No Light Time"
                        onChange={onChangeSettings} 
                        value={localSettings.no_light_time}
                    />
                    <NumberInput 
                        name="water_time"
                        label="Water Time"
                        onChange={onChangeSettings} 
                        value={localSettings.water_time}
                    />
                    <NumberInput 
                        name="no_water_time"
                        label="No Water Time"
                        onChange={onChangeSettings} 
                        value={localSettings.no_water_time}
                    />
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
        console.log(this.props)
        return(
            <div className='contentContainer'>
                <h1>{'Settings'}</h1>
                {this.renderData()}
                <div>
                    {this.renderSettings()}
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
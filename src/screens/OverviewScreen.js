import React from 'react';
import {connect} from 'react-redux'
import {getCurrentOxygen, getCurrentTemperature, getCurrentPH, getSettings} from '../actions'
import { RingSpinner } from 'react-spinners-kit'


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
                <div>
                    <p>Oxygen:</p>
                    <p>{currentOxygen[0].value}</p>
                    <p>PH:</p>
                    <p>{currentPH[0].value}</p>
                    <p>Temperature:</p>
                    <p>{currentTemperature[0].value}°C</p>
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
        console.log(this.props.currentOxygen)
        return(
            <div className='contentContainer'>
                <h1>{'Data & Details'}</h1>
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
    }
}

export default connect(mapStateToProps, {getCurrentOxygen, getCurrentPH, getCurrentTemperature, getSettings})(OverviewScreen);
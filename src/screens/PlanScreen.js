import React from 'react';
import {PlanList} from '../components/PlanList';
import { MonthPicker } from '../components/MonthPicker';
import {     
    PLAN_EXAMPLE_DATA_APRIL,
    PLAN_EXAMPLE_DATA_JUNE,
    PLAN_EXAMPLE_DATA_MARCH,
    PLAN_EXAMPLE_DATA_MAY
} from '../constants/data';

export default class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            selectedMonth: "April"
        })
    }

    onPick = (month) => {
        this.setState({
            selectedMonth: month
        })
    }

    renderPlan(){
        const {selectedMonth} = this.state
        if(selectedMonth == "March"){
            return <PlanList data={PLAN_EXAMPLE_DATA_MARCH}/>
        }
        else if (selectedMonth == "April"){
            return <PlanList data={PLAN_EXAMPLE_DATA_APRIL}/>
        }
        else if (selectedMonth == "May"){
            return <PlanList data={PLAN_EXAMPLE_DATA_MAY}/>
        }
        else if (selectedMonth == "June"){
            return <PlanList data={PLAN_EXAMPLE_DATA_JUNE}/>
        }
    }

    render(){
        console.log(this.state)
        return(
            <div className='contentContainer'>
                <MonthPicker onPick={this.onPick} selected={this.state.selectedMonth}/>
                {this.renderPlan()}
            </div>
        )
    }
}
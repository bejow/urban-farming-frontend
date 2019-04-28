import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineChart extends React.Component {
	componentDidMount(){
        this.chart.overlaidCanvas.style.position= "relative";
    }
	render() {
		const options = {
            height:300,
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Oxygen Saturation"
			},
			axisY: {
				title: "Oxygen",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "Date",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: new Date(2019, 3, 1), y: 58 },
					{ x: new Date(2019, 3, 2), y: 61 },
					{ x: new Date(2019, 3, 3), y: 63 },
					{ x: new Date(2019, 3, 4), y: 62 },
					{ x: new Date(2019, 3, 5), y: 62 },
					{ x: new Date(2019, 3, 6), y: 60},
					{ x: new Date(2019, 3, 7), y: 59 },
					{ x: new Date(2019, 3, 8), y: 55 },
					{ x: new Date(2019, 3, 9), y: 52},
					{ x: new Date(2019, 3, 10), y: 51 },
				]
			}]
		}
		return (
		<div className={"chart" + " " + this.props.area}>
			<CanvasJSChart options = {options}
                onRef = {ref => {
                    this.chart = ref
                    }} 
                />
		</div>
		);
	}
}
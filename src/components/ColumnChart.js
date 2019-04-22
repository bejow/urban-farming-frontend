import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class ColumnChart extends React.Component {

    componentDidMount(){
        this.chart.overlaidCanvas.style.position= "relative";
    }
    render(){
        return (
            <div className={"chart" + " " + this.props.area}>
                <CanvasJSChart options = {options}
                    onRef = {ref => {
                        this.chart = ref
                        }} 
                />
            </div>
        )
    }
}

const options = {
    title: {
      text: "Temperature"
    },
    height: 300,
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "01.04.2019",  y: 16  },
                  { label: "02.04.2019", y: 18  },
                  { label: "03.04.2019", y: 23  },
                  { label: "04.04.2019",  y: 22  },
                  { label: "05.04.2019",  y: 21  }
              ]
     }]
}
 
import React, { PureComponent } from 'react';
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default class MyAreaChart extends PureComponent {

  render() {
    console.log(this.props);
    return (
        <ResponsiveContainer height='auto' aspect={2} width={this.props.width ? this.props.width : "50%"}>
            <AreaChart
                data={this.props.data}
                margin={{
                top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="litre" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
  }
}

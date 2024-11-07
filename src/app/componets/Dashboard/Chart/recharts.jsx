"use client";

import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 42000,
      pv: 32000,
      amt: 34000,
    },
    {
      name: 'Mar',
      uv: 18680,
      pv: 9670,
      amt: 15060,
    },
    {
      name: 'May',
      uv: 23970,
      pv: 20980,
      amt: 19890,
    },
    {
      name: 'July',
      uv: 34800,
      pv: 22000,
      amt: 22280,
    },
    {
        name: 'Sep',
        uv: 45200,
        pv: 31080,
        amt: 31000,
      },
      {
        name: 'Nov',
        uv: 40000,
        pv: 28000,
        amt: 37000,
      },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-in-responsive-container-4vx38p';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}

          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis dataKey="name" scale="band" />
            <YAxis domain={[0, 50000]}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            tickFormatter={(value) => `${value / 1000}k`}/>
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#011a46" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#216ff8" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

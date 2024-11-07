
'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
          {/* اضافه کردن مستطیل به عنوان پس‌زمینه */}
          <defs>
            <rect x={0} y={0} width="100%" height="100%" fill="#151b28" />
          </defs>
          <g>
            <rect x={0} y={0} width="100%" height="100%" fill="#151b28" /> {/* رنگ پس‌زمینه */}
          </g>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#1dd959" fill="#0767b3" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#0767b3" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#47a4eb" fill="#0767b3" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}


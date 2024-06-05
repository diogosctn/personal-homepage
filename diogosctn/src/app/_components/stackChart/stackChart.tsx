'use client'

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

export default function App({
  data,
  width,
  height,
  cx,
  cy,
  outerRadius,
  onChartStateChange
} : {
  data: any,
  width: number,
  height: number,
  cx: number,
  cy: number,
  outerRadius: number,
  onChartStateChange: (newState: null | number) => void
}
) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(()=>{
    onChartStateChange(activeIndex)
  }, [activeIndex])

  const handlePieClick = (_: any, index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={cx}
        cy={cy}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
        activeIndex={activeIndex === null ? undefined : activeIndex}
        activeShape={(props: any) => {
          const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

          return (
            <g>
              <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 10}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
              />
            </g>
          );
        }}
        onClick={handlePieClick}
      >
        {data.map((entry: any, index: any) => (
          <Cell key={`cell-${index}`} fill={data[index % data.length].color} />
        ))}
      </Pie>
    </PieChart>
  );
}

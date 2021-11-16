import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';
import api from './services/api';

function App() {
  const [data, setData] = useState([]);
  const [dataTeste] = useState([]);
  const svgRef = useRef();


  function teste() {
    data.forEach(ele => {
      dataTeste.push(parseInt(ele.data[0]));
    })

    console.log(dataTeste);
  }

  useEffect(() => {
    api.get('sensor?sensor=temperatureSensor')
       .then(res => {
         console.log(res.data);
         setData(res.data);
       })


    // set up svg
    const w = 800;
    const h = 400;
    const svg = d3.select(svgRef.current)
                  .attr('width', w)
                  .attr('heigth', h)
                  .style('background', '#d3d3d3')
                  .style('margin-top', '50')
                  .style('overflow', 'visible');
    // set up scalling
    const xScale = d3.scaleLinear()
                     .domain([0, dataTeste.length -1])
                     .range([0, w])
    const yScale = d3.scaleLinear()
                     .domain([0, h])
                     .range([h, 0])
    const generateScaledLine = d3.line()
          .x((d, i) => xScale(i))
          .y(yScale)
          .curve(d3.curveCardinal);
    // set the axes
    const xAxis = d3.axisBottom(xScale)
                    .ticks(dataTeste.length/10)
                    .tickFormat(i => i+1);
    const yAxis = d3.axisLeft(yScale)
                    .ticks(5);
    svg.append('g')
       .call(xAxis)
       .attr('transform', `translate(0, ${h})`);
    svg.append('g')
       .call(yAxis);
    // set up data for svg
    svg.selectAll('.line')
       .data([dataTeste])
       .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'black')
  }, []);
 
  return (
    <div className="App">
      {teste()}
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;

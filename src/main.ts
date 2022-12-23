import './style.css';
import * as d3 from 'd3';

d3.select('.canvas')
  .append('text')
  .attr('x', 50)
  .attr('y', 50)
  .text('Hello from D3!');

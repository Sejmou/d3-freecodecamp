import './style.css';
import { select, range } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body') // selection of all existing DOM elements that match the selector
  .append('svg') // append returns a new selection
  .attr('width', width)
  .attr('height', height);

let t = 0;

// we want to draw circles with lines between them for all data points
// issue: circles should always be drawn above lines
// to solve this, we put circles and lines in separate groups
// those groups can be thought of as layers
const lineLayer = svg.append('g');
const circleLayer = svg.append('g');
const dataCountText = svg.append('text').attr('x', 25).attr('y', 25);

setInterval(() => {
  const n = 15;
  // add and remove datapoints over time, arranged in a pattern that looks like a sine wave
  const data = range(n + Math.sin(t) * (n + 1)).map(i => ({
    x: i * 60 + 50,
    y: 275 + 225 * Math.sin(i * 0.5 + t),
  }));
  // don't understand my code perfectly, but I think min and max length of array over time are 0 and 2 * n + 1
  dataCountText.text(`Number of data points: ${data.length}`);

  const circles = circleLayer.selectAll('circle').data(data).join('circle');
  circles
    .attr('r', 20)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('fill', (_, i) => (i % 2 == 0 ? 'orange' : 'lightblue'));

  const dataWithoutFirst = data.slice(1);
  const lines = lineLayer.selectAll('line').data(dataWithoutFirst).join('line');
  lines
    .attr('stroke', 'black')
    .attr('x1', (_, i) => data[i].x)
    .attr('y1', (_, i) => data[i].y)
    .attr('x2', d => d.x)
    .attr('y2', d => d.y);

  t += 0.01;
}, 1000 / 60); // 60 fps means 1 update every 16.6 ms (1000 ms / 60)

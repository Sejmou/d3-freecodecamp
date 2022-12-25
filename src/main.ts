import './style.css';
import { select, range } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body') // selection of all existing DOM elements that match the selector
  .append('svg') // append returns a new selection
  .attr('width', width)
  .attr('height', height);

let t = 0;

setInterval(() => {
  console.log(t);
  const data = range(15).map(i => ({
    x: i * 60 + 50,
    y: 250 + 225 * Math.sin(i * 0.5 + t),
  }));

  const circles = svg.selectAll('circle').data(data);

  // the enter selection runs only once before DOM elements are added for data points
  circles.enter().append('circle').attr('r', 20);
  // use "regular" update selection to update the DOM elements that already exist
  circles.attr('cx', d => d.x).attr('cy', d => d.y);

  t += 60 / 1000;
}, 1000 / 60);

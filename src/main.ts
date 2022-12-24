import './style.css';
import { select, range } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body') // selection of all existing DOM elements that match the selector
  .append('svg') // append returns a new selection
  .attr('width', width)
  .attr('height', height);

const data = range(15);

svg
  .selectAll('circle')
  .data(data)
  .enter() // enter selection contains all data elements that don't have a corresponding DOM element for the provided selector (in this case 'circle)
  .append('circle')
  .attr('r', 10)
  .attr('cx', d => d * 25 + 25)
  .attr('cy', d => 250 + Math.sin(d * 0.5) * 100);

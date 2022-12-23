import './style.css';
import { select } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const n = 100;

const marks = range(n).map(i => ({
  y: i * 20,
  width: width,
  height: 10,
  // mask: 'url(#circle-mask)',// will be relevant later
}));

svg
  .selectAll('rect')
  .data(marks) // produces d3 data join
  .join('rect') // simplified API compared to enter/exit etc. - will create one rect for each mark
  .attr('y', d => d.y) // assign attributes to each rect
  .attr('width', d => d.width)
  .attr('height', d => d.height);
//.attr('mask', d => d.mask);// will be relevant later

function range(number: number) {
  return Array.from(Array(number).keys());
}

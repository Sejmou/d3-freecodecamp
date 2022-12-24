import './style.css';
import { ascending, select } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const sortable = [3, 60, 35, 2, 45, 320, 5];
// Vanilla JS sorting approach:
// sortable.sort((a, b) => a - b);
// note: cannot use sort without this sorting function as default sort converts to string and sorts alphabetically

// fancy d3 sorting approach:
console.log(sortable.sort(ascending));

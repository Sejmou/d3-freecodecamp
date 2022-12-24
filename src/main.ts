import './style.css';
import { ascending, select } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const sortable = [
  { name: 'C', value: 66 },
  { name: 'A', value: 123 },
  { name: 'B', value: 2 },
];
console.log(sortable.sort((a, b) => ascending(a.value, b.value)));

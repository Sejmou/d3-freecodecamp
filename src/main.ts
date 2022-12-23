import './style.css';
import { select } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// other SVG elements can refer to "masks" - masks can be of arbitrary shape and can be used to hide or show content
// in this example, we create a circle mask and will use it to show vertical lines "inside" of it (where it is white) and hide them outside of it (where it is black)
const circleMask = svg.append('mask').attr('id', 'circle-mask');
circleMask
  .append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', '25%')
  .attr('fill', 'white'); // if a mask is filled white, it will show the content, if it is filled black, it will hide the content

const n = 100;

svg
  .selectAll('rect')
  .data(range(n))
  .join('rect') // simplified API compared to enter/exit etc. - more details later
  .attr('y', i => i * 20)
  .attr('width', width)
  .attr('height', 10)
  .attr('mask', 'url(#circle-mask)');

function range(number: number) {
  return Array.from(Array(number).keys());
}

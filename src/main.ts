import './style.css';
import { select, range, symbolStar, symbol, Selection } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const renderMask = (
  selection: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  id: string,
  inverted: boolean
) => {
  const mask = selection.append('mask').attr('id', id);
  mask
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', inverted ? 'black' : 'white');

  mask
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .append('path')
    .attr('d', symbol(symbolStar, 100000))
    .attr('fill', inverted ? 'white' : 'black');
};

svg.call(renderMask, 'mask-1', false);
svg.call(renderMask, 'mask-2', true);

// above lines are equivalent to:
// renderMask(svg, 'mask-1', false);
// renderMask(svg, 'mask-2', true);
// advantage of using approach above is that we can chain it with other calls

const n = 100;

svg
  .append('g') // this is important! by grouping we make sure that we select only newly created rects, not all rects in the SVG
  .selectAll('rect')
  .data(range(n))
  .join('rect') // simplified API compared to enter/exit etc. - more details later
  .attr('y', i => i * 20)
  .attr('width', width)
  .attr('height', 10)
  .attr('mask', 'url(#mask-1)');

svg
  .append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('x', i => i * 20)
  .attr('width', 10)
  .attr('height', height)
  .attr('mask', 'url(#mask-2)');

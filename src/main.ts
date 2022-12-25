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

  // beforehand, we just set cx and cy on the update selection
  // therefore, initially (on enter) the circles were all at the same position (0, 0)
  // solution: use join() -> returns merged enter and update selections
  const circles = svg.selectAll('circle').data(data).join('circle');
  // add logic that should be applied on both enter and update selections
  circles
    .attr('r', 20)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  // the above code is equivalent to
  // const circles = svg.selectAll('circle').data(data);
  // const circlesEnter = circles.enter().append('circle');
  // circles
  //   .merge(circlesEnter) // for some reason TS complains here - but it works at runtime :/
  //   .attr('r', 20)
  //   .attr('cx', d => d.x)
  //   .attr('cy', d => d.y);

  t += 0.01;
}, 1000 / 60); // 60 fps means 1 update every 16.6 ms (1000 ms / 60)

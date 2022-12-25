import './style.css';
import { csv, extent, max, min, scaleLinear, select } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body') // selection of all existing DOM elements that match the selector
  .append('svg') // append returns a new selection
  .attr('width', width)
  .attr('height', height);

interface SepalData {
  sepal_length: number;
  sepal_width: number;
  petal_length: number;
  petal_width: number;
  species: string;
}

const xValue = (d: SepalData) => d.petal_length;
const yValue = (d: SepalData) => d.sepal_length;

const main = async () => {
  const data = await csv<SepalData>(csvUrl, d => ({
    sepal_length: +d.sepal_length!,
    sepal_width: +d.sepal_width!,
    petal_length: +d.petal_length!,
    petal_width: +d.petal_width!,
    species: d.species!,
  }));

  const x = scaleLinear()
    .domain(extent(data, xValue) as [number, number]) // extent returns a two-element array of the minimum and maximum values in the variable
    .range([0, width]);

  const y = scaleLinear()
    .domain(extent(data, yValue) as [number, number])
    .range([height, 0]); // need to flip because SVG has the origin at the top left, not bottom left
  const marks = data.map(d => ({ x: x(xValue(d)), y: y(yValue(d)) }));

  svg
    .selectAll('circle')
    .data(marks)
    .join('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 5);
};
main();

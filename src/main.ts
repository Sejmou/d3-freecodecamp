import './style.css';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv';

const main = async () => {
  const data = await csv(csvUrl, d => ({
    sepal_length: +d.sepal_length!,
    sepal_width: +d.sepal_width!,
    petal_length: +d.petal_length!,
    petal_width: +d.petal_width!,
    species: d.species!,
  }));
  console.log(data);
};

main();

# Learning D3.js
This repo contains "my version" of the D3.js code presented in the [d3.js course](https://www.youtube.com/watch?v=xkBheRZTkaw) by Curran Kelleher published on the freeCodeCamp.org YouTube channel (or, rather the parts of it I look at in detail).

I follow a similar project setup to the lectures, the main difference being that I chose [TypeScript](https://www.typescriptlang.org/) instead of plain JavaScript, with [Vite](https://vitejs.dev/) as the build tool. I started out with Vite's "Vanilla TS" template (find details on Vite templates [here](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) and then installed `d3` and `@types/d3`.

## Installation
To make the code run on your machine, make sure `NodeJS` is installed. 

I chose to use `yarn` instead of `npm`, so you might need to install it too with `npm i -g yarn`.

Once that is done, run `yarn` to install the project's dependencies (effectively only TypeScript and d3).

Then, run `yarn dev` and the project should become available via [localhost on port 5173](http://localhost:5173/).

## Branches
I've organized the code into separate branches related to the different episodes of the course (see index [here](https://vizhub.com/forum/t/get-it-right-in-black-white-index/110)).
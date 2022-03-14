let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'

let values = []

let xScale
let yScale

let width = 800
let height = 600
let padding = 40

let svg = d3.select('svg')

let drawCanvas = () => {
  svg.attr('width', width)
     .attr('height', height)
}

let generateScales = () => {

}

let drawPoints = () => {

}

let generateAxes = () => {

}

fetch(url)
  .then(response => response.json())
  .then(data => {
    values = data
    drawCanvas()
    generateScales()
    drawPoints()
    generateAxes()
  })

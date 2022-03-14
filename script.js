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

  xScale = d3.scaleLinear()
             .range([padding, width - padding])

  yScale = d3.scaleLinear()
             .range([height - padding, padding])

}

let drawPoints = () => {

  svg.selectAll('circle')
     .data(values)
     .enter()
     .append('circle')
     .attr('class', 'dot')
     .attr('r', '5')
     .attr('data-xvalue', (item) => {
       return item['Year']
     })
     .attr('data-yvalue', (item) => {
       return new Date(item['Seconds'] * 1000) // converted the time in seconds to milliseconds
     })

}

let generateAxes = () => {

  let xAxis = d3.axisBottom(xScale)

  let yAxis = d3.axisLeft(yScale)

  svg.append('g')
     .call(xAxis)
     .attr('id', 'x-axis')
     .attr('transform', `translate(0, ${height - padding})`)

  svg.append('g')
     .call(yAxis)
     .attr('id', 'y-axis')
     .attr('transform', `translate(${padding}, 0)`)

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

d3.select("button").on("click", loaddata);

function loaddata() {
    d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
    .then(function(data) {
        console.log(data); 

var circles = d3.select("svg")
    .selectAll("circle")
    .data(data);

circles.join("circle")
    .attr("cx", d => d.Xi)
      .attr("cy", d => d.Yi)
      .attr("r", 4)
      .attr("fill", d => d.color)
      .attr("opacity", 0.7)
      .transition()
      .duration(1500)
      .attr("cx", d => d.Xf)
      .attr("cy", d => d.Yf);})}

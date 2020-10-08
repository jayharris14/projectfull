var getgdp= function(mper){
    return mper.gdp
}

var allgdp=mper.map(getgdp)

var getper= function(mper){
    return mper.per
}

var allper=mper.map(getper)



var drawPlot2=function(mper,screen,xScale2,yscale2 )
{   
console.log("mper", mper)
  d3.select("#graph")
  .selectAll("circle")
  .data(mper)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(mper)
  {return xScale2(mper.per)})
  .attr("cy", function(mper)
  {return yscale2(mper.gdp)})
   .attr("r",2)
    .attr("fill", "blue")
    

}

 var makeTranslateString2 = function(x,y)
{
    return "translate("+x+","+y+")";
}
 
 var drawAxes2 = function(graphDim2,margins2,
                         xScale2,yscale2)
{

  var xAxis2 = d3.axisBottom(xScale2);
  var yAxis2 = d3.axisLeft(yscale2);

  var axes = d3.select("#graph2")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins2.left+","
           +(margins2.top+graphDim2.height)+")")
      .call(xAxis2)
  axes.append("g")
      .attr("transform","translate("+margins2.left+","
           +(margins2.top)+")")
      .call(yAxis2)

}

 var drawLabels2 = function(graphDim2,margins2)
{
  var labels2 = d3.select("#graph2")
  .append("g")
  .classed("labels",true)

labels2.append("text")
  .text("GDP")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins2.left+(graphDim2.width/2))
  .attr("y",margins2.top)

labels2.append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("x",margins2.left+(graphDim2.width/2))
  .attr("y",screen.height)

labels2.append("g")
  .attr("transform","translate(20,"+
        (margins2.top+(graphDim2.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph2=function(mper)
{ var screen= {width:250, height:300}
d3.select("#graph2")
 
.attr("height", screen.height)

  var margins2 = {left:65,right:30,top:20,bottom:20} 
 
var xScale2=d3.scaleLinear()
.domain([25, 80])
.range([0,screen.width])

var yscale2=d3.scaleLinear()
.domain([0,2600])
.range([screen.height,0])


 
 
var createAxes2 = function(screen,margins2,mper,
                           target2,xScale2,yscale2)
{
    var xAxis2 = d3.axisBottom(xScale2);
    var yAxis2 = d3.axisLeft(yScale2);
    
    var axes2 = d3.select(target2)
        .append("g")
    axes2.append("g")
        .attr("transform","translate("+margins2.left+","
             +(margins2.top+graph2.height)+")")
        .call(xAxis2)
    axes2.append("g")
        .attr("transform","translate("+margins2.left+","
             +(margins2.top)+")")
        .call(yAxis2)
}   

    var createLabels2 = function(screen,margins2,
mper,target2)
{
        var labels2 = d3.select("target2")
        .append("g")
        .classed("labels",true)
        
    labels2.append("text")
        .text("GDP")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins2.left+(graph2.width/2))
        .attr("y",margins2.top)
    
    labels2.append("text")
        .text("Minority Percentage")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins2.left+(graph2.width/2))
        .attr("y",screen.height)
    
    labels2.append("g")
        .attr("transform","translate(20,"+ 
              (margins2.top+(graph2.height/2))+")")
        .append("text")
        .text("GDP")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph2 =
        {
            width:screen.width-margins2.left-margins2.right,
            height:screen.height - margins2.top-margins2.bottom
        }
    console.log(graph2);

    d3.select("#graph2")
    .attr("width",screen.width)
    .attr("height",screen.height)

    var target = d3.select("#graph2")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins2.left+","+
                        margins2.top+")");

 
    d3.select("#graph2")
     .append("path")
      .datum(mper)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
      .x(allgdp)
      .y (allper))
 
 drawAxes2(graph2,margins2,xScale2,yscale2)
 drawPlot2(mper,screen,xScale2,yscale2)
 drawLabels2(graph2,margins2)
 createLabels2(screen,margins2,
mper,target)
}

intialgraph2(mper)

var drawPlot=function(data,screen,xScale,yscale )
{
    console.log("data", data)
  d3.select("#graph")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(data)
  { 
      return xScale(data.divp)})
  .attr("cy", function(data)
  {return yscale(data.gdp)})
   .attr("r",2)
    .attr("fill", "blue")
    



 .on("mouseover",function(data)
{   
 if(! d3.select(this).classed("off"))
    {
        d3.selectAll(".line")
            .classed("fade",true);
            
        d3.select(this)
            .classed("fade",false)
            .raise(); 
    }
        
         var xPos=d3.event.pageX;
      var yPos=d3.event.pageY;
      d3.select("#tooltip")
      .classed("hidden", false)
      .style("top", xPos+"px")
      .style("left", yPos+"px")
        d3.select("#per")
        .text("Percentage of Minorities in Management")
      d3.select("#per2")
        .text(data.divp)
      d3.select("#gdp")
        .text("GDP")
      d3.select("#gdp2")
        .text(data.gdp)
      d3.select("#year")
        .text("Year")
      d3.select("#year2")
        .text(data.year)
        
    })
    .on("mouseout",function(subject)
{
    if(! d3.select(this).classed("off"))
    {
        d3.selectAll(".line")
        .classed("fade",false);
    }
})

    
}



var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}


 var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
 
 var drawAxes = function(graphDim,margins,
                         xScale,yscale)
{

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yscale);

  var axes = d3.select("svg")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top+graphDim.height)+")")
      .call(xAxis)
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top)+")")
      .call(yAxis)

}

 var drawLabels = function(graphDim,margins)
{
  var labels = d3.select("svg")
  .append("g")
  .classed("labels",true)

labels.append("text")
  .text("GDP")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",margins.top)

labels.append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",screen.height)

labels.append("g")
  .attr("transform","translate(20,"+
        (margins.top+(graphDim.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph=function(data)
{ var screen= {width:250, height:300}
d3.select("#graph")
.attr("width", screen.width)
.attr("height", screen.height)

  var margins = {left:65,right:30,top:20,bottom:20} 
 
var xScale=d3.scaleLinear()
.domain([27,35])
.range([0,screen.width])

var yscale=d3.scaleLinear()
.domain([16,20])
.range([screen.height,0])


 
 
var createAxes = function(screen,margins,counties,
                           target,xScale,yscale)
{
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var axes = d3.select(target)
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top)+")")
        .call(yAxis)
}   

    var createLabels = function(screen,margins,
data,target)
{
        var labels = d3.select("target")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("GDP")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
    
    labels.append("text")
        .text("Minority Percentage")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",screen.height)
    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("GDP")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph =
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);

    d3.select("#graph")
    .attr("width",screen.width)
    .attr("height",screen.height)

    var target = d3.select("svg")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");

 
    d3.select("#graph")
     .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
      .x(function(data)
  { 
      return xScale(data.divp)})
      .y (function(data)
  {return yscale(data.gdp)}))
 
 drawAxes(graph,margins,xScale,yscale)
 drawPlot(data,screen,xScale,yscale)
 drawLabels(graph,margins)
 createLabels(screen,margins,
data,target)
}

intialgraph(data)

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
  d3.select("#canvas2")
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
    
     .on("mouseover",function(mper)
{   

        
         var xPos=d3.event.pageX;
      var yPos=d3.event.pageY;
      d3.select("#tooltip")
      .classed("hidden", false)
      .style("top", xPos+"px")
      .style("left", yPos+"px")
        d3.select("#per")
        .text("Percentage of Minorities in Management")
      d3.select("#per2")
        .text(mper.per)
      d3.select("#gdp")
        .text("GDP")
      d3.select("#gdp2")
        .text(mper.gdp)

        
    })

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
.domain([0, 60])
.range([0,screen.width-margins2.left-margins2.right])

var yscale2=d3.scaleLinear()
.domain([0,600])
.range([screen.height-margins2.bottom-margins2.top,0])


 
 
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
    .attr("id","canvas2")
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

    

var width3 = 150
var height3 = 150
var margin3 = 10

var radius = Math.min(width3, height3) / 2 - margin3

var svg = d3.select("#graph3")
  .append("svg")
    .attr("width", width3)
    .attr("height", height3)
  .append("g")
    .attr("transform", "translate(" + width3 / 2 + "," + height3 / 2 + ")");

var data = {a: 60, b: 40}

var color = d3.scaleOrdinal()
  .domain(data)
  .range(["brown","purple"])


var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)


var width = 175
    height = 160
    margin = 15


var radius = Math.min(width, height) / 2 - margin


var svg = d3.select("#graph4")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


var data2 = {a: 85.9, b: 6.9, c:10.7, d:6.7}




var color = d3.scaleOrdinal()
  .domain(data)
  .range(["yellow", "blue", "red", "green"])


var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready2 = pie(d3.entries(data2))

svg
  .selectAll('whatever')
  .data(data_ready2)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)


var drawLegend = function(graphDim,margins)
{ 

    
    var legend = d3.select("svg")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 10) +","+
             (margins.top+10)+")");
    
    var entries = legend.selectAll("g")
        .data(["A"])
        .enter()
        .append("g")
        .classed("legendEntry",true)
        .attr("fill",function(politics)
             {
                return ;
             })
        .attr("transform",function(politics,index)
              {
                return "translate(0,"+index*20+")";
              })
        .on("click",function(politics)
        {
            
            var on = ! d3.select(this).classed("off");
            if(on) //turn off
                {
                    d3.select(this)
                        .classed("off",true);
                    d3.selectAll("."+politics)
                        .classed("off",true);
                }
            else
                {
                    d3.select(this)
                        .classed("off",false);        
                    d3.selectAll("."+politics)
                        .classed("off",false);

                }
        })
            
        entries.append("rect")
                .attr("width",10)
                .attr("height",10)
                .attr("fill", "red")
    
        entries.append("text")
                .text("Less College")
                .attr("x",15)
                .attr("y",10)  
  
     var legend = d3.select("svg")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 10) +","+
             (margins.top+50)+")");
    
    var bentries = legend.selectAll("g")
        .data(["B"])
        .enter()
        .append("g")
        .classed("legendEntry",true)
        .attr("fill",function(politics)
             {
                return ;
             })
        .attr("transform",function(politics,index)
              {
                return "translate(0,"+index*20+")";
              })
        .on("click",function(politics)
        {
            
            var on = ! d3.select(this).classed("off");
            if(on) //turn off
                {
                    d3.select(this)
                        .classed("off",true);
                    d3.selectAll("."+politics)
                        .classed("off",true);
                }
            else
                {
                    d3.select(this)
                        .classed("off",false);        
                    d3.selectAll("."+politics)
                        .classed("off",false);

                }
        })
            
        bentries.append("rect")
                .attr("width",10)
                .attr("height",10)
                .attr("fill", "blue")
    
        bentries.append("text")
                .text("High Unemployment")
                .attr("x",15)
                .attr("y",10)  
  
}


   var categories = [
       {
           class:"lessCollege",
           name:"Less College"
       },
       {
           class:"unemployment",
           name:"High unemployment"
       }
    ]
   
   var getwomen=function(data4)
{{
  return data4.women
    
}
var allwomen=data4.women.map(getwomen)}

   var getyear=function(data4)
{{
  return data4.year
}
var allyear=data4.year.map(getyear)}
   var getwhite=function(data4)
{{
  return data4.white
}
var allwhite=data4.white.map(getwhite)}
   var getblack=function(data4)
{{
  return data4.black
}
var allasian=data4.asian.map(getasian)}
   var gethispanic=function(data4)
{{
  return data4.hispanic
}
var allhispanic=data4.map(gethispanic)}
   var gettotal=function(data4)
{{
  return data4.total
}
var alltotal=data4.total.map(gettotal)}
   var getblack=function(data4)
{{
  return data4.black
}
var allblack=data4.black.map(getblack)}
   var getgdp=function(data4)
{{
  return data4.gdp
}
var allgdp=data4.gdp.map(getgdp)}
   var drawTable= function(data4)
{
  console.log ("hi", data4)
var rows=d3.select("#table3")
  .selectAll("tr")
  .data(data4)
  .enter()
  .append("tr")

  rows.append("td")
  .text(allyear)

  rows.append("td")
  .text("Management Occupations")

rows.append("td")
.text(allwomen)

rows.append("td")
.text(allwhite)

rows.append("td")
.text(allblack)
    
    rows.append("td")
.text(allasian)
    
    rows.append("td")
.text(allhispanic)
    
    rows.append("td")
.text(alltotal)
    
    rows.append("td")
.text(allgdp)

}

  // var myfunction=function(data4)
{
var showAlert = function()
{
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.asian ==
                        data4A.asian)
        {
            return 0;
        }
        else if (data4A.asian > 
                        data4A.asian)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
{
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.year ==
                        data4A.year)
        {
            return 0;
        }
        else if (data4A.year > 
                        data4A.year)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.white ==
                        data4A.white)
        {
            return 0;
        }
        else if (data4A.white > 
                        data4A.white)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.black ==
                        data4A.black)
        {
            return 0;
        }
        else if (data4A.black > 
                        data4A.black)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.women ==
                        data4A.women)
        {
            return 0;
        }
        else if (data4A.women > 
                        data4A.women)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}

var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.hispanic ==
                        data4A.hispanic
          )
        {
            return 0;
        }
        else if (data4A.hispanic > 
                        data4A.hispanic)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.total ==
                        data4A.total
          )
        {
            return 0;
        }
        else if (data4A.total > 
                        data4A.total)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})}
var showAlert = function()
    {
  console.log("You have clicked on Events");
    d3.selectAll("#table3 tr")
    .remove()
    data4.sort(function(data4A,data4B)
                 
    {
        if(data4A.gdp ==
                        data4A.gdp
          )
        {
            return 0;
        }
        else if (data4A.gdp > 
                        data4A.gdp)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
        
})
    }

d3.select("#uno")
    .on("click",showAlert)
    d3.select("#duos")
    .on("click",showAlert)
    d3.select("#tres")
    .on("click",showAlert)
    d3.select("#q")
    .on("click",showAlert)
    d3.select("#cinco")
    .on("click",showAlert)
    d3.select("#sex")
    .on("click",showAlert)
    d3.select("#seven")
    .on("click",showAlert)
    d3.select("#eight")
    .on("click",showAlert)

}



  var drawBars=function(female, target5, xScale5, yscale5)
      
    {
        svg.selectAll("rect")
        .data(female)
        .enter()
        .append("rect")
        .attr("x", 5)
            
        
        .attr("y", function(female){
             return yscale(female.gdp);
              
        })
        .attr("width", xScale5.bandwidth)
        .attr("height", function(female)
        {
            return graphDim5.height-yscale5(female.gdp)
        })}
    


    




var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}

 
 var drawAxes5 = function(graphDim5,margins5,
                         xScale5,yscale5)
{

  var xAxis5 = d3.axisBottom(xScale);
  var yAxis5 = d3.axisLeft(yscale);

  var axes5 = d3.select("svg")
      .append("g")
  axes5.append("g")
      .attr("transform","translate("+margins5.left+","
           +(margins5.top+graphDim5.height)+")")
      .call(xAxis5)
  axes5.append("g")
      .attr("transform","translate("+margins5.left+","
           +(margins5.top)+")")
      .call(yAxis5)
}

 var drawLabels5 = function(graphDim5,margins5)
{
  var labels5 = d3.select("svg")
  .append("g")
  .classed("labels",true)

labels5.append("text")
  .text("Male")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins5.left+(graphDim5.width/2))
  .attr("y",margins5.top)

labels5.append("text")
  .text("Female")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("x",margins5.left+(graphDim5.width/2))
  .attr("y",screen5.height)

labels5.append("g")
  .attr("transform","translate(20,"+
        (margins5.top+(graphDim5.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph5=function(female)
{ var screen5= {width:250, height:300}
d3.select("#graph5")
.attr("width", screen.width)
.attr("height", screen.height)

  var margins5 = {left:65,right:30,top:20,bottom:20} 
 
var xScale5=d3.scaleLinear()
.domain([0,100])
.range([0,screen.width])

var yscale5=d3.scaleLinear()
.domain([0,100])
.range([screen.height,0])


 
 
var createAxes5 = function(screen5,margins5,counties5,
                           target5,xScale,yscale)
{
    var xAxis5 = d3.axisBottom(xScale);
    var yAxis5 = d3.axisLeft(yScale);
    
    var axes5 = d3.select(target)
        .append("g")
    axes5.append("g")
        .attr("transform","translate("+margins5.left+","
             +(margins5.top+graph5.height)+")")
        .call(xAxis)
    axes5.append("g")
        .attr("transform","translate("+margins5.left+","
             +(margins5.top)+")")
        .call(yAxis5)
}   

    var createLabels5 = function(screen5,margins,
female,target5)
{
        var labels5 = d3.select("target")
        .append("g")
        .classed("labels",true)
        
    labels5.append("text")
        .text("Male")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
    
    labels5.append("text")
        .text("Female")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",screen.height)
    
    labels5.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("Male and Female")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph5 =
        {
            width:screen5.width-margins5.left-margins5.right,
            height:screen5.height - margins5.top-margins5.bottom
        }
    console.log(graph);

    d3.select("#graph5")
    .attr("width",screen5.width)
    .attr("height",screen5.height)

    var target = d3.select("svg")
    .append("g")
    .attr("id","#graph5")
    .attr("transform",
          "translate("+margins5.left+","+
                        margins5.top+")");

 
    d3.select("#graph5")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
    
 
 drawAxes(graph5,margins5,xScale5,yscale5)
 drawBars(female, target5, xScale5, yscale5)
 drawLabels(graph5,margins5)
 createLabels(screen5,margins5,
female,target5)
}

intialgraph(female)


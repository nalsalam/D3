var colors = {"CBO" : "#000000",
              "Administration" : "#F4B082",
              "Blue Chip Consensus" : "#59AAB2"};

/*
** Forecasting Errors Data
** 'mean_error' will be plotted on the x-axis.
** 'rmse' (Root Mean Squared Error) will be plotted on the y-axis
*/
var errors_data = [
  {
    macro_var: "Growth of Real Output",
    years: "1980 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: -0.1, 
    rmse: 1.3     
  }, 
  {
    macro_var: "Growth of Real Output",
    years: "1980 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.2,  
    rmse: 1.5   
  }, 
  {
    macro_var: "Growth of Real Output",
    years: "1980 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.0,  
    rmse: 1.4   
  },
  {
    macro_var: "Growth of Real Output",
    years: "1979 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 0.2, 
    rmse: 1.2  
  }, 
  {
    macro_var: "Growth of Real Output",
    years: "1979 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.4,  
    rmse: 1.3  
  }, 
  {
    macro_var: "Growth of Real Output",
    years: "1979 to 2011",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 0.1,  
    rmse: 1.1   
  },
  {
    macro_var: "Growth of Nominal Output",
    years: "1980 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: 0.2, 
    rmse: 1.5  
  }, 
  {
    macro_var: "Growth of Nominal Output",
    years: "1980 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.5,  
    rmse: 1.7   
  }, 
  {
    macro_var: "Growth of Nominal Output",
    years: "1980 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.4,  
    rmse: 1.5   
  },
  {
    macro_var: "Growth of Nominal Output",
    years: "1979 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 0.8, 
    rmse: 1.4  
  }, 
  {
    macro_var: "Growth of Nominal Output",
    years: "1979 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.9,  
    rmse: 1.5   
  }, 
  {
    macro_var: "Growth of Nominal Output",
    years: "1979 to 2011",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 0.9,  
    rmse: 1.4   
  },
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: 0.3, 
    rmse: 1.2  
  }, 
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.1,  
    rmse: 1.4   
  }, 
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.2,  
    rmse: 1.4   
  },
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 1.0, 
    rmse: 1.7  
  }, 
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.7,  
    rmse: 1.7   
  }, 
  {
    macro_var: "Real Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 0.9,  
    rmse: 1.6   
  },
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: 0.6, 
    rmse: 1.3  
  }, 
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.2,  
    rmse: 1.3   
  }, 
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1981 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.5,  
    rmse: 1.2   
  },
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 1.2, 
    rmse: 1.7  
  }, 
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.8,  
    rmse: 1.7   
  }, 
  {
    macro_var: "Interest Rate on 3-Month Treasury Bills",
    years: "1983 to 2011",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 1.3,  
    rmse: 1.8   
  },
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: 0.4, 
    rmse: 0.7  
  }, 
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.2,  
    rmse: 0.9   
  }, 
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.5,  
    rmse: 0.8   
  },
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 0.8, 
    rmse: 1.1   
  }, 
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.3,  
    rmse: 1.3   
  }, 
  {
    macro_var: "Interest Rate on 10-Year Treasury Notes",
    years: "1984 to 2011",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 0.9,  
    rmse: 1.1   
  },
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1981 to 2014",
    forecaster: "CBO",
    horizon: "Two-Year",
    mean_error: 0.2, 
    rmse: 0.9   
  }, 
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1981 to 2014",
    forecaster: "Administration",
    horizon: "Two-Year",
    mean_error: 0.1,  
    rmse: 0.9   
  }, 
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1981 to 2014",
    forecaster: "Blue Chip Consensus",
    horizon: "Two-Year",
    mean_error: 0.3,  
    rmse: 1.0   
  },
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1983 to 2011",
    forecaster: "CBO",
    horizon: "Five-Year",
    mean_error: 0.2, 
    rmse: 0.6  
  }, 
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1983 to 2011",
    forecaster: "Administration",
    horizon: "Five-Year",
    mean_error: 0.0,  
    rmse: 0.6   
  }, 
  {
    macro_var: "Inflation in the Consumer Price Index",
    years: "1983 to 2010",
    forecaster: "Blue Chip Consensus",
    horizon: "Five-Year",
    mean_error: 0.4,  
    rmse: 0.8   
  }
];

/*
** Define chart
*/

// Set dimensions for the errors_chart SVG 
var margin = {top: 15, right: 5, bottom: 5, left: 5};
var width = 450 - margin.left - margin.right;
var height = 315 - margin.top - margin.bottom; 

// Define the errors_chart
var errors_chart = d3.select("#chart").append("svg:svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
** Subtitle
*/

// Define the subtitle
var sub = d3.select("#subtitle").append("text");

// Add subtitle to incorporate dates for the data 
sub.selectAll("text")
   .data(errors_data)
  .enter().append("text")
   .filter(function(d) {if (d.forecaster == "CBO" & d.macro_var == "Growth of Real Output" & d.horizon == "Two-Year") return d;})
   .text(function(d) {return d.horizon + ' Forecasts of ' + d.macro_var + ', ' + d.years;}); 

/*
** Set range and domains for axes
*/

var x = d3.scaleLinear()
          .range([0, width])
          .domain([-1.5, 1.5]);

var y = d3.scaleLinear()
          .range([height, 0])
          .domain([0.0, 2.0]);

/*
** Draw gridlines
*/

// gridlines in X-axis function
function make_x_gridlines() {
  return d3.axisBottom(x).ticks(5)
}

// Add the X-axis gridlines
errors_chart.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(0," + height + ")")
            .call(make_x_gridlines().tickSize(-height).tickFormat(""))

// gridlines in Y-axis function
function make_y_gridlines() {
  return d3.axisLeft(y).ticks(5)
}

// Add the Y-axis gridlines
errors_chart.append("g")
            .attr("class", "grid")
            .call(make_y_gridlines().tickSize(-width).tickFormat(""))


/*
** Draw axes
*/

// Add the X-axis
errors_chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
           .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding([8]))
            .style("font-size","12px")
            .style("font-family","sans-serif");

// Add the Y-axis
errors_chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + x(0) + ",0)")
           .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding([225]))
            .style("font-size","12px")
            .style("font-family","sans-serif");


/*
** Add axes labels
*/

// Add X-axis label
 errors_chart.append("text")  
             .attr("x", 140)
             .attr("y", 330)
             .attr("font-family", "sans-serif")
             .style("font-size", "12px")
             .style("font-style", "normal")
             .text("Mean Error (Percentage points)");
 
// Add Y-axis label
errors_chart.append("text")  
            .attr("x", -22)
            .attr("y", -10)
            .attr("font-family", "sans-serif")
            .style('font-size', '12px')
            .style('font-style', 'normal')
            .text("RMSE (Percentage points)");
 
/*
** Tooltips
*/

// Define the div for the tooltip
var tooltip = d3.select("#chart").append("div")	
            .attr("class", "tooltip")				
            .style("opacity", 0);

// Define tooltip format
var format = d3.format(".1f"); // so "0.0" shows up with decimal place shown


/*
** Add the data points!
*/

// First the gray points
errors_chart.selectAll(".gray.point")
            .data(errors_data.filter(function(d) {if (d.horizon == "Two-Year" & d.macro_var != "Growth of Real Output") return d;}))
            .enter().append("circle")
			  .attr("cx",function(d) { return x(d.mean_error); })
			  .attr("cy",function(d) { return y(d.rmse); })
			  .attr("r","5")			  
            .attr("class", "gray point")
            .style("fill", function(d) {if (d.macro_var == "Growth in Real Output" & d.horizon == "Two-Year") {return colors[d.forecaster]} else {return "#e6e6e6"} ;})

// Then the colored points (with the tooltips)
errors_chart.selectAll(".color.point")
            .data(errors_data.filter(function(d) {if (d.horizon == "Two-Year" & d.macro_var == "Growth of Real Output") return d;}))
           .enter().append("circle")
			  .attr("cx",function(d) { return x(d.mean_error); })
			  .attr("cy",function(d) { return y(d.rmse); })
			  .attr("r","6")			  
            .attr("class", "color point")
            .style("fill", function(d) {if (d.macro_var == "Growth of Real Output" & d.horizon == "Two-Year") {return colors[d.forecaster]} else {return "#e6e6e6"} ;})
            .on("mouseover", function(d) {if (d.macro_var == "Growth of Real Output" & d.horizon == "Two-Year") {
             tooltip.transition()		
                    .duration(250)		
                    .style("opacity", 1);		
             tooltip.html("Mean Error: " + format(d.mean_error) + ",<br>RMSE: " + format(d.rmse))	// Add coordinates in tooltip
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY) + "px");}
              })					
            .on("mouseout", function(d) {
              tooltip.transition()		
                     .duration(500)		
                     .style("opacity", 0);	
             });


// Read any change in radio button forms
d3.selectAll("#macro_vars input").on("change", updateVariable);
d3.selectAll("#horizon input").on("change", updateHorizon);


function updateVariable() {
  var macro_var = this.value;
  var horizon = document.querySelector('input[name=horizon_buttons]:checked').value;
 
  errors_chart.selectAll(".gray.point").remove();
  errors_chart.selectAll(".color.point").remove();
 
  // First, add the gray points   
  errors_chart.selectAll(".gray.point")
              .data(errors_data.filter(function(d) {if (d.horizon == horizon & d.macro_var != macro_var) return d;}))
             .enter().append("circle")
				.attr("cx", function(d) {return x(d.mean_error);})
				.attr("cy", function(d) {return y(d.rmse);})
				.attr("r","5")
              .attr("class", "gray point")
              .style("fill", function(d) {if (d.macro_var == macro_var) {return colors[d.forecaster]} else {return "#e6e6e6"} ;})

  // Then, add the colored data points on top (with tooltips)
  errors_chart.selectAll(".color.point")
              .data(errors_data.filter(function(d) {if (d.horizon == horizon & d.macro_var == macro_var) return d;}))
             .enter().append("circle")
				.attr("cx", function(d) {return x(d.mean_error);})
				.attr("cy", function(d) {return y(d.rmse);})
				.attr("r","6")
              .attr("class", "color point")
              .style("fill", function(d) {if (d.macro_var == macro_var) {return colors[d.forecaster]} else {return "#e6e6e6"} ;})
              .on("mouseover", function(d) {
                if (d.macro_var == macro_var & d.horizon == horizon) {		
                 tooltip.transition().duration(250).style("opacity", 1);		
                 tooltip.html("Mean Error: " + format(d.mean_error) + ",<br>RMSE: " + format(d.rmse))	// Add coordinates in tooltip
                        .style("left", (d3.event.pageX) + "px")		
                        .style("top", (d3.event.pageY) + "px");
                    }
                })					
              .on("mouseout", function(d) {
                tooltip.transition().duration(500).style("opacity", 0);	
                });
     
  // Change subtitle, too
  sub.selectAll("text").remove();
     
  sub.selectAll("text")
     .data(errors_data)
    .enter().append("text")
     .filter(function(d) {if (d.forecaster == "CBO" & d.macro_var == macro_var & d.horizon == horizon) return d;})
     .text(function(d) {return d.horizon + ' Forecasts of ' + d.macro_var + ', ' + d.years;});
 
} // end updateVariable() function

// Update the forecast horizon 
function updateHorizon(horizon) {
  var horizon = this.value;
  var macro_var = document.querySelector('input[name=macro_buttons]:checked').value;
  
  errors_chart.selectAll(".gray.point").remove();
  errors_chart.selectAll(".color.point").remove();  
  
  // First, add the gray points   
  errors_chart.selectAll(".gray.point")
              .data(errors_data.filter(function(d) {if (d.horizon == horizon & d.macro_var != macro_var) return d;}))
             .enter().append("circle")
				.attr("cx", function(d) {return x(d.mean_error);})
				.attr("cy", function(d) {return y(d.rmse);})
				.attr("r","5")
              .attr("class", "gray point")
              .style("fill", function(d) {if (d.macro_var == macro_var) {return colors[d.forecaster]} else {return "#e6e6e6"} ;})

  // Then, add the colored points on top (with tooltips)
  errors_chart.selectAll(".color.point")
              .data(errors_data.filter(function(d) {if (d.horizon == horizon & d.macro_var == macro_var) return d;}))
             .enter().append("circle")
				.attr("cx", function(d) {return x(d.mean_error);})
				.attr("cy", function(d) {return y(d.rmse);})
				.attr("r","6")
              .attr("class", "color point")
              .style("fill", function(d) {if (d.macro_var == macro_var & d.horizon == horizon) {return colors[d.forecaster]} else {return "#e6e6e6"} ;})
              .on("mouseover", function(d) {
                if (d.macro_var == macro_var & d.horizon == horizon) {		
                 tooltip.transition().duration(250).style("opacity", 1);		
                 tooltip.html("Mean Error: " + format(d.mean_error) + ",<br>RMSE : " + format(d.rmse))	// Add coordinates in tooltip
                       .style("left", (d3.event.pageX) + "px")		
                       .style("top", (d3.event.pageY) + "px");
                 }
               })					
              .on("mouseout", function(d) {		
               tooltip.transition().duration(500).style("opacity", 0);	
               });

     
  // Change subtitle, too
  sub.selectAll("text").remove();
     
  sub.selectAll("text")
     .data(errors_data)
    .enter().append("text")
     .filter(function(d) {if (d.forecaster == "CBO" & d.macro_var == macro_var & d.horizon == horizon) return d;})
     .text(function(d) {return d.horizon + ' Forecasts of ' + d.macro_var + ', ' + d.years;});

} // end updateHorizon() function

// Legend data
var legend_data = [
  {
    forecaster: "CBO",
    x: 11, 
    y: 10  
  }, 
  {
    forecaster: "Administration",
    x: 11, 
    y: 28
  }, 
  {
    forecaster: "Blue Chip Consensus",
    x: 11, 
    y: 47
  } 
];

// Define the legend svg
var legend = d3.select("#legend").append("svg")
               .attr("width", 240)
               .attr("height", 75);

legend.selectAll(".point")
  .data(legend_data)
 .enter().append("circle")
	.attr("cx", function(d) {return d.x;} )
	.attr("cy", function(d) {return d.y;} )
	.attr("r","6")
  .attr("class", "point")
  .style("fill", function(d) {return colors[d.forecaster];})
    
 legend.selectAll("text")
   .data(legend_data)
  .enter().append("text")
   .attr("x", function(d) { return d.x + 12; })
   .attr("y", function(d) { return d.y + 4; })
   .text( function (d) { return d.forecaster; })
   .attr("font-family", "sans-serif")
   .attr("font-size", "14px");

  var legendHack = legend.selectAll("text")
      .filter( function (d) {
        if (d.forecaster=="Blue Chip Consensus") return d    	
      })
      .text(null);
      
  legendHack
    .append("tspan")
      .text("Blue Chip")
      .attr("class", "ital");
      
  legendHack
    .append("tspan")
      .text(" Consensus");
      

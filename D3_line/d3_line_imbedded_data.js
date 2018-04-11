var data = [{"month":"1/1/2003","price":"$54"},{"month":"2/1/2003","price":"$54"},{"month":"3/1/2003","price":"$50"},{"month":"4/1/2003","price":"$52"},{"month":"5/1/2003","price":"$53"},{"month":"6/1/2003","price":"$49"},{"month":"7/1/2003","price":"$51"},{"month":"8/1/2003","price":"$52"},{"month":"9/1/2003","price":"$54"},{"month":"10/1/2003","price":"$52"},{"month":"11/1/2003","price":"$50"},{"month":"12/1/2003","price":"$52"},{"month":"1/1/2004","price":"$59"},{"month":"2/1/2004","price":"$60"},{"month":"3/1/2004","price":"$61"},{"month":"4/1/2004","price":"$59"},{"month":"5/1/2004","price":"$60"},{"month":"6/1/2004","price":"$64"},{"month":"7/1/2004","price":"$58"},{"month":"8/1/2004","price":"$57"},{"month":"9/1/2004","price":"$61"},{"month":"10/1/2004","price":"$61"},{"month":"11/1/2004","price":"$68"},{"month":"12/1/2004","price":"$78"},{"month":"1/1/2005","price":"$79"},{"month":"2/1/2005","price":"$89"},{"month":"3/1/2005","price":"$101"},{"month":"4/1/2005","price":"$98"},{"month":"5/1/2005","price":"$100"},{"month":"6/1/2005","price":"$96"},{"month":"7/1/2005","price":"$88"},{"month":"8/1/2005","price":"$85"},{"month":"9/1/2005","price":"$79"},{"month":"10/1/2005","price":"$83"},{"month":"11/1/2005","price":"$86"},{"month":"12/1/2005","price":"$87"},{"month":"1/1/2006","price":"$101"},{"month":"2/1/2006","price":"$97"},{"month":"3/1/2006","price":"$93"},{"month":"4/1/2006","price":"$94"},{"month":"5/1/2006","price":"$90"},{"month":"6/1/2006","price":"$86"},{"month":"7/1/2006","price":"$89"},{"month":"8/1/2006","price":"$96"},{"month":"9/1/2006","price":"$96"},{"month":"10/1/2006","price":"$96"},{"month":"11/1/2006","price":"$103"},{"month":"12/1/2006","price":"$108"},{"month":"1/1/2007","price":"$106"},{"month":"2/1/2007","price":"$104"},{"month":"3/1/2007","price":"$100"},{"month":"4/1/2007","price":"$99"},{"month":"5/1/2007","price":"$100"},{"month":"6/1/2007","price":"$107"},{"month":"7/1/2007","price":"$106"},{"month":"8/1/2007","price":"$108"},{"month":"9/1/2007","price":"$113"},{"month":"10/1/2007","price":"$116"},{"month":"11/1/2007","price":"$114"},{"month":"12/1/2007","price":"$118"},{"month":"1/1/2008","price":"$122"},{"month":"2/1/2008","price":"$139"},{"month":"3/1/2008","price":"$136"},{"month":"4/1/2008","price":"$127"},{"month":"5/1/2008","price":"$127"},{"month":"6/1/2008","price":"$131"},{"month":"7/1/2008","price":"$133"},{"month":"8/1/2008","price":"$131"},{"month":"9/1/2008","price":"$127"},{"month":"10/1/2008","price":"$108"},{"month":"11/1/2008","price":"$108"},{"month":"12/1/2008","price":"$103"},{"month":"1/1/2009","price":"$108"},{"month":"2/1/2009","price":"$108"},{"month":"3/1/2009","price":"$106"},{"month":"4/1/2009","price":"$112"},{"month":"5/1/2009","price":"$123"},{"month":"6/1/2009","price":"$119"},{"month":"7/1/2009","price":"$113"},{"month":"8/1/2009","price":"$117"},{"month":"9/1/2009","price":"$116"},{"month":"10/1/2009","price":"$121"},{"month":"11/1/2009","price":"$120"},{"month":"12/1/2009","price":"$125"},{"month":"1/1/2010","price":"$127"},{"month":"2/1/2010","price":"$123"},{"month":"3/1/2010","price":"$125"},{"month":"4/1/2010","price":"$127"},{"month":"5/1/2010","price":"$128"},{"month":"6/1/2010","price":"$142"},{"month":"7/1/2010","price":"$153"},{"month":"8/1/2010","price":"$157"},{"month":"9/1/2010","price":"$164"},{"month":"10/1/2010","price":"$162"},{"month":"11/1/2010","price":"$174"},{"month":"12/1/2010","price":"$184"}];

var parseDate = d3.timeParse("%m/%d/%Y");

//      var height = 300;
//      var width = 500;
		var page_width = Math.min(700, document.documentElement.clientWidth);
		var margin = 50,
			width = page_width - 2*margin,
			height = page_width*0.8 - 2*margin;

      var max = d3.max(data,function(d){ return Number(d.price.trim().slice(1)); });
      var minDate = d3.min(data,function(d){ return parseDate(d.month); });
      var maxDate = d3.max(data,function(d){ return parseDate(d.month); });

      var y = d3.scaleLinear()
                  .domain([0,max])
                  .range([height,0]);
      var x = d3.scaleTime()
                  .domain([minDate,maxDate])
                  .range([0,width]);
      var yAxis = d3.axisLeft(y);
      var xAxis = d3.axisBottom(x);

      var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

      var margin = {left:50,right:50,top:40,bottom:0};

      var chartGroup = svg.append("g")
                  .attr("transform","translate("+margin.left+","+margin.top+")");

      var line = d3.line()
                      .x(function(d){ return x(parseDate(d.month)); })
                      .y(function(d){ return y(Number(d.price.trim().slice(1))); });

      chartGroup.append("path").attr("d",line(data));
      chartGroup.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);
      chartGroup.append("g").attr("class","y axis").call(yAxis);

  'use strict';

  

  var app = angular.module('jsondemoApp');

  app.controller('MainCtrl', [
    "$scope",
    "EarthquakeService",
    "$timeout",
    function ($scope,  EarthquakeService, $timeout) 
    {
      var earthquakes = [];
      //$scope.place = "demo";
      
console.log("fuck yeah");


      EarthquakeService.getEarthquakes()
      .then( function(data) {
        
        // console.dir(data);
        $scope.earthquakes = data;
        


        

        //  chartIt(data,$scope);
        var w = 500;
        var h = 400;
        



        
      //Create SVG element

      var padding = 25;

      var xScale = d3.scale.linear()
      .domain([0,d3.max(data,function(d) {return d.depth + 30})])
      .range([padding,w + padding]);

      var yScale =  d3.scale.linear()
      .domain([1.0,d3.max(data,function(d) {return d.magnitude  })] )
      .range([h - padding - 10,padding]);             

      var svg = d3.select("div.control")
      .append("svg")
      .attr("width", w)
      .attr("height", h  );

     // var xAxis = d3.svg.axis()
       //   .scale(xScale)
         // .orient("bottom");

     svg.append("g").attr("class", "axis")
     .attr("class","grid")
      .attr("transform", "translate(0," + (h - padding) + ")")
    .call(d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickSize(-h,0,0)
                .ticks(10)
                );

      var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left");

       svg.append("g").attr("class","grid").attr("transform", "translate(" + padding + ",0)")
       .call(yAxis
        .tickSize(-w,0,0)
        .ticks(10)); 

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", w - 10)
    .attr("x", - 100)
    .attr("color", "red")
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Magnitude on Richter Scale");

svg.append("text")
    .attr("class","x lable")
    .attr("text-anchor", "end")
     .attr("dy", ".75em")
    .attr("x",w - 250)
    .attr("y",h - 10)
    .text("Depth in Km");


      svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(d.depth);
      })
      .attr("cy", function(d) {
        return yScale(d.magnitude);
      })
      .attr("r", function(d) {
        return (Math.sqrt(h - d.magnitude) * .1);
        
      }).on("click", function(d,i) {


        svg.selectAll("circle").attr("fill","black");

        d3.select(this).attr("fill","orange");


       d3.select("div.place")
         .text("Location: " + d.place);

         d3.select("div.dm").text( "Depth: " + d.depth + " (km), Magnitude: " + d.magnitude).attr("color", "red");

       

     }).on("mouseover", function(d,i) {

      d3.select(this).attr("r", Math.sqrt(h - d.magnitude) * .25 )
     }).on("mouseout", function(d,i) {
      d3.select(this).attr("r", Math.sqrt(h - d.magnitude) * .1 )

     });

      




      // function test(d,i) { 

      //   for (var index = 0; index < $scope.earthquakes.length; index++ )
      //   {
      //       $scope.earthquakes[index].setQuakeFalse();
      //   }

      //   $scope.earthquakes[i].setQuakeTrue(); $scope.$apply, console.dir($scope.earthquakes[i]); console.dir($scope.earthquakes); 
      //    $scope.place = "sdfds";
      //     $scope.$apply;
      // }
      

      /*d3.select(this).attr("font-family", "sans-serif")
      .attr("font-size", "10px")
      .attr("fill", "red");*/

      
        // end
      }, function(err){console.log("fuck fuck fuck"),console.dir(err)})

  

}
]
).directive('d3Bars', function() {
    return {
      restrict: 'E',
      replace: 'true',
      template: '<h1>Name: blah Address: blah</h1>'
    };
  });

  /*function chartIt(data,$scope){

  //Width and height
  var w = 1000;
  var h = 1900;
  
  var dataset = data;
  
      //Create SVG element

      var xScale = d3.scale.linear()
      .domain([0,d3.max(dataset,function(d) {return d.depth})])
      .range([0,w + 5]);

      var yScale =  d3.scale.linear()
      .domain([0,d3.max(dataset,function(d) {return d.magnitude })] )
      .range([h + 5,30]);             

      var svg = d3.select("div.control")
      .append("svg")
      .attr("width", w)
      .attr("height", h + 30);

      



      svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(d.depth);
      })
      .attr("cy", function(d) {
        return yScale(d.magnitude);
      })
      .attr("r", function(d) {
        return (Math.sqrt(h - d.magnitude) * .2);
        
      }).on("mouseover", function(d) {
       // d3.select(this).attr("fill","orange");
      //  d3.select(this).enter().append("text").text(function(d) { return d.place; console.dir(d)})
      });



        
        
        
} */






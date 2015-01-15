

var app = angular.module('jsondemoApp');


app.factory('EarthquakeService', [
    '$http',
    function($http) {
        return {
            getEarthquakes: function() {
                return $http.get('earthquakeData.json').then(
                    function(response) {
                        var earthquakes = [];
                        
                        if(response.status === 200) {

                         // earthquakes = response.data;
                         
                            for(var i = 0; i < response.data.features.length; ++i) {
                                var currentEarthquakeData = response.data.features[i];
                                var earthquake = new Earthquake(currentEarthquakeData);
                                
                                    earthquakes.push(earthquake);
                               
                            }
                        }
                        
                        
                        
                        return earthquakes;
                    }
                    
                );
            }
        };
    }
]);
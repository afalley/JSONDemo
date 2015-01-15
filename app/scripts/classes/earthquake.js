function Earthquake(data) {

this.place = data.properties.place;
this.magnitude = data.properties.mag;
this.longitude = data.geometry.coordinates[0];
this.latitude = data.geometry.coordinates[1];
this.depth = data.geometry.coordinates[2];
}

Earthquake.prototype.currentPlace = "";

Earthquake.prototype.setCurrentPlace = function(quakePlace)
{
	this.currentPlace = quakePlace;
	return;
}

Earthquake.prototype.getCurrentPlace = function()
{
	return this.currentPlace;
}

Earthquake.prototype.clickedQuake = false;

Earthquake.prototype.setQuakeTrue = function()
{
	this.clickedQuake = true;
		
	return this.clickedQuake;
}

Earthquake.prototype.setQuakeFalse = function()
{
	this.clickedQuake = false;
	return this.clickedQuake;
}


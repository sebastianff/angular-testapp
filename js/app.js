(function(){

	var app = angular.module('store',[]);//Here we are declaring a module. A module contains different parts of our app.

	app.controller('StoreController',function(){//This is a controller, Here we define our apps behaviour.
		this.products = gems;
	});

	var gems = [
	{
		name:'Dodecahedron',
		price:2.95,
		description:'A fine piece of art',
		canPurchase:true,
		soldOut:false
	}
	]

})();
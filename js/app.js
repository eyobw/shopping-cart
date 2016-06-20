'use strict';

// Define the `shoppingApp` module
var shoppingApp = angular.module('shoppingApp', ['ngRoute']);

shoppingApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'templates/products.html',
        controller: shopController 
      }).
      when('/cart', {
        templateUrl: 'templates/cart.html',
        controller: shopController
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

shoppingApp.factory("DataService", function () {    

    // create shopping cart
    var myCart = new cart();    

    // return data object with cart
    return {
        cart: myCart
    };
});

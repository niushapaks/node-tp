'use strict';

var ecomm = angular
  .module('ecomm', ['ngRoute', 'luegg.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'app/views/home/index.html'
      })
      .when('/products', {
        controller: 'ProductsCtrl',
        templateUrl: 'app/views/products/index.html'
      })
      .when('/products/edit/:id', {
        controller: 'ProductsEditCtrl',
        templateUrl: 'app/views/products/edit.html'
      })
      .when('/products/create', {
        controller: 'ProductsCreateCtrl',
        templateUrl: 'app/views/products/edit.html'
      })
      .when('/categories', {
        controller: 'CategoriesCtrl',
        templateUrl: 'app/views/categories/index.html'
      })
      .when('/categories/create', {
        controller: 'CategoriesCreateCtrl',
        templateUrl: 'app/views/categories/edit.html'
      })
      .when('/categories/edit/:id', {
        controller: 'CategoriesEditCtrl',
        templateUrl: 'app/views/categories/edit.html'
      })
      .otherwise('/');
  }]);

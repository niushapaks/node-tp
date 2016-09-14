'use strict';

ecomm.controller('SidebarCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.menu = [
    {label: 'Produits', href: 'products', icon: 'shopping-cart'},
    {label: 'Catégories', href: 'categories', icon: 'database'}
  ];

  $scope.isActive = function(link) {
    return link.href === $location.path().split('/')[1];
  };
}]);

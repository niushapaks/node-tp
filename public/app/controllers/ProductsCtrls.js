'use strict';

ecomm.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  var defaultData = {
    count: 3,
    elements: [
      {_id: 1, name: 'PS4', category: {_id: 1, name: 'hardware'}, description: 'Une super console', price: 399.99, createdAt: new Date()},
      {_id: 2, name: 'Surface Pro 3', category: {_id: 2, name: 'tablet'}, description: 'Une tablette puissante', price: 799.99, createdAt: new Date()},
      {_id: 3, name: 'Là où les tigres sont chez eux', category: {_id: 3, name: 'book'}, description: 'Un livre magnifique', price: 8.99, createdAt: new Date()}
    ]
  };

  $scope.loadAll = function() {
    $http.get('/api/products').then(function(res) {
      $scope.count = res.data.count;
      $scope.products = res.data.elements;
    }, function(err) {
      $scope.count = defaultData.count;
      $scope.products = defaultData.elements;
    });
  };

  $scope.remove = function(id) {
    $http.delete('/api/products/' + id).then(function() {
      toastr.success('Suppression réussie');
      $scope.loadAll();
    }, function(err) {
      toastr.error('Une erreur est survenue');
    });
  };

  $scope.loadAll();
}]);

ecomm.controller('ProductsEditCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  var defaultProduct = {_id: 1, name: 'PS4', category: {_id: 1, name: 'hardware'}, description: 'Une super console', price: 399.99, createdAt: new Date()};
  var defaultCategories = [
    {_id: 1, name: 'hardware', createdAt: new Date()},
    {_id: 2, name: 'tablet', createdAt: new Date()},
    {_id: 3, name: 'book', createdAt: new Date()}
  ]

  $scope.action = 'Edition';

  $http.get('/api/categories').then(function(res) {
    $scope.categories = res.data.elements;
  }, function(err) {
    $scope.categories = defaultCategories;
  });

  $http.get('/api/products/' + $routeParams.id).then(function(res) {
    $scope.product = res.data;
  }, function() {
    $scope.product = defaultProduct;
  });

  $scope.save = function() {
    var product = {};
    ['name', 'category', 'price', 'description'].forEach(function(attr) {
      product[attr] = $scope.product[attr];
    });
    $http.put('/api/products/' + $routeParams.id, product).then(function() {
      toastr.success('Enregistrement effectué');
      $location.path('/products');
    }, function() {
      toastr.error('Une erreur est survenue');
    });
  };
}]);

ecomm.controller('ProductsCreateCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.action = 'Création';

  $http.get('/api/categories').then(function(res) {
    $scope.categories = res.data.elements;
  }, function(err) {
    $scope.categories = defaultCategories;
  });

  $scope.save = function() {
    $http.post('/api/products', $scope.product).then(function(res) {
      toastr.success('Enregistrement effectué');
      $location.path('/products');
    }, function() {
      toastr.error('Une erreur est survenue');
    });
  };
}]);

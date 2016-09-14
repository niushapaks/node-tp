'use strict';

ecomm.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http) {
  var defaultData = {
    count: 3,
    elements: [
      {_id: 1, name: 'hardware', createdAt: new Date()},
      {_id: 2, name: 'tablet', createdAt: new Date()},
      {_id: 3, name: 'book', createdAt: new Date()}
    ]
  };

  $scope.loadAll = function() {
    $http.get('/api/categories').then(function(res) {
      $scope.count = res.data.count;
      $scope.categories = res.data.elements;
    }, function(err) {
      $scope.count = defaultData.count;
      $scope.categories = defaultData.elements;
    });
  };

  $scope.remove = function(id) {
    $http.delete('/api/categories/' + id).then(function() {
      toastr.success('Suppression réussie');
      $scope.loadAll();
    }, function(err) {
      toastr.error('Une erreur est survenue');
    });
  };

  $scope.loadAll();
}]);

ecomm.controller('CategoriesEditCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  var defaultCategory = {_id: 1, name: 'hardware', createdAt: new Date()};

  $scope.action = 'Edition';

  $http.get('/api/categories/' + $routeParams.id).then(function(res) {
    $scope.category = res.data;
  }, function() {
    $scope.category = defaultCategory;
  });

  $scope.save = function() {
    var category = {};
    ['name'].forEach(function(attr) {
      category[attr] = $scope.category[attr];
    });
    $http.put('/api/categories/' + $routeParams.id, category).then(function() {
      toastr.success('Enregistrement effectué');
      $location.path('/categories');
    }, function() {
      toastr.error('Une erreur est survenue');
    });
  };
}]);

ecomm.controller('CategoriesCreateCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.action = 'Création';

  $scope.save = function() {
    $http.post('/api/categories', $scope.category).then(function(res) {
      toastr.success('Enregistrement effectué');
      $location.path('/categories');
    }, function() {
      toastr.error('Une erreur est survenue');
    });
  };
}]);

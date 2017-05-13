angular.module('app', [])
  .controller('loop', function($scope, $http) {
    $http.get("data.json")
      .then(function(response) {
        $scope.posts = response.data;
      });
  });

app.controller('indexController', function ($scope, $http, $location) {

    $scope.searchText = '';
    $scope.testScope = 'foo';

    $scope.SearchCustomer = function () {
        $location.path("/codesearch/" + $scope.searchText);
    };

});

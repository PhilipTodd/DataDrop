app.controller('codeSearchController', function ($scope, $http, $routeParams) {
    $scope.items;
    $scope.test = 'code search here';
    $scope.searchText = $scope.testScope;

    $scope.search = function () {
        var url = "/api/CodeSearch?searchText=" + $scope.searchText;
        $http.get(url).success(function (data, status, headers, config) {
            $scope.items = data.data;
        }).error(function (data, status, headers, config) {
            $scope.title = "Oops... something went wrong";
            $scope.working = false;
        });
    };

    $scope.search();
});
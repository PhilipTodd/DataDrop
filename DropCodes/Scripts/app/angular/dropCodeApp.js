var app = angular.module('DropCodeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/Html/main.html",
        controller: "mainController"
    })
    .when("/main/", {
        templateUrl: "/Html/Main.html",
        controller: "mainController"
    })
    .when("/codesearch/:searchText", {
        templateUrl: "/Html/CodeSearch.html",
        controller: "codeSearchController"
    })
    .when("/personalwiki", {
        templateUrl: "/Html/PersonalWiki.html",
        controller: "personalWikiController"
    })
    .when("/contacttracker", {
        templateUrl: "/Html/ContactTracker.html",
        controller: "contactTrackerController"
    })
    .otherwise({ redirectTo: "/main" });
    $locationProvider.html5Mode(true);
    //$locationProvider.html5mode({ enabled: true, requireBase: false });
}]);
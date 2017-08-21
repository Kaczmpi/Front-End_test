var app = angular.module("myProject", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/repos", {
            templateUrl: "repos.htm",
            controller: 'ReposCtrl'
        })
        .when("/contribs", {
            templateUrl: "contribs.htm",
            controller: 'ContribsCtrl'
        });
});

app.controller('ReposCtrl', function ($scope, $http) {
    $scope.username = "x-formation";
    $scope.sortType = 'forks_count'; // set the default sort type
    $scope.sortReverse = true; // set the default sort order
    $http.get("https://api.github.com/users/" + $scope.username + "/repos")
        .then(function (response) {
            $scope.reposData = response.data;
        });
});

app.controller('ContribsCtrl', function ($scope, $http) {
    $scope.sortType = 'contributions'; // set the default sort type
    $scope.sortReverse = true; // set the default sort order
    $http.get("https://www.x-formation.com/wp-content/uploads/2014/09/contributors.json")
        .then(function (response) {
            $scope.contribsData = response.data;
        });
});
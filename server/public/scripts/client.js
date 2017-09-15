var webApp = angular.module("webApp", ['ngRoute']);

webApp.config(['$routeProvider', function($routeProvider) {
    console.log('Route Config loaded');
    $routeProvider.when('/search', {
            templateUrl: './views/search.html',
            controller: 'webController as vm'
        }).when('/addnew', {
            templateUrl: './views/addnew.html',
            controller: 'secondController as vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}])
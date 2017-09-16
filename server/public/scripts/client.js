var webApp = angular.module("webApp", ['ngRoute', 'xeditable']);

webApp.run(function(editableOptions) {
    editableOptions.theme = 'default';
});

webApp.config(['$routeProvider', function($routeProvider) {
    console.log('Route Config loaded');
    $routeProvider.when('/search', {
            templateUrl: './views/search.html',
            controller: 'secondController as vm'
        }).when('/addnew', {
            templateUrl: './views/addnew.html',
            controller: 'secondController as vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}])
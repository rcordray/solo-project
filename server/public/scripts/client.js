var webApp = angular.module("webApp", ['ngRoute', 'xeditable']);

webApp.run(function(editableOptions) {
    editableOptions.theme = 'default';
});

webApp.config(['$routeProvider', function($routeProvider) {
    console.log('Route Config loaded');
    $routeProvider.when('/search', {
            templateUrl: './views/search.html',
            controller: 'secondController as vm'
        }).when('/homepage', {
            templateUrl: './views/homepage.html',
            controller: 'secondController as vm'
        }).when('/addnew', {
            templateUrl: './views/addnew.html',
            controller: 'secondController as vm'
        }).when('/player/:id', {
            templateUrl: '/views/player.html',
            controller: 'PlayerController as pc'
        }).when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'LoginController as lc',
        }).when('/register', {
            templateUrl: '/views/templates/register.html',
            controller: 'LoginController as lc'
        }).when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as uc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        }).when('/info', {
            templateUrl: '/views/templates/info.html',
            controller: 'InfoController',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .otherwise({
            redirectTo: 'home'
        })




}])
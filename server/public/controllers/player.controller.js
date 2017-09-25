webApp.controller('PlayerController', ['secondService', '$routeParams', function(secondService, $routeParams) {
    var self = this;
    console.log('$routeParams', $routeParams);
    self.currentPlayer = secondService.currentPlayer;
    secondService.getPlayers($routeParams.id)
}]);
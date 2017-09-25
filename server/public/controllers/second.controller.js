webApp.controller('secondController', ['secondService', '$http', '$routeParams', function(secondService, $http, $routeParams) {
    console.log('Post Controller loaded');

    var self = this;
    self.players = secondService.players;
    self.addNewPlayer = secondService.addNewPlayer;
    self.editPlayerNotes = secondService.editPlayerNotes;
    self.deletePlayer = secondService.deletePlayer;
    self.currentPlayer = secondService.currentPlayer;
    secondService.getPlayers($routeParams.id)
    self.currentPlayerId = $routeParams.id;
}])
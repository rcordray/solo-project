webApp.controller('webController', ['webService', function(webService) {
    console.log('Web Controller loaded');

    var self = this;
    self.players = webService.players;

    // self.deletePlayer = function(playerId) {
    //     FirstService.deletePlayer
    // }
}])
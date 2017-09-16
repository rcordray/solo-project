webApp.controller('secondController', ['secondService', function(secondService) {
    console.log('Post Controller loaded');

    var self = this;
    self.players = secondService.players;
    self.addNewPlayer = secondService.addNewPlayer;
    // secondService.getPlayers();
    self.editPlayerNotes = secondService.editPlayerNotes;
}])
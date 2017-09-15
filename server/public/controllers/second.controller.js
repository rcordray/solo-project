webApp.controller('secondController', ['secondService', function(secondService) {
    console.log('Post Controller loaded');

    var self = this;
    self.players = secondService.players;
    // var PlayerToAdd = {
    //         firstname: self.players.firstname,
    //         lastname: self.players.lastname,
    //         team: self.players.team,
    //         notes: self.players.notes
    //     }
    // self.addNewPlayer = function() {
    //     console.log('submit has been hit');
    // }
    // console.log(PlayerToAdd);

    self.addNewPlayer = secondService.addNewPlayer;
}])
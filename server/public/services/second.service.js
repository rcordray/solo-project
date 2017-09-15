webApp.service('secondService', ['$http', function($http) {
    console.log('second service loaded');

    var self = this;
    self.players = {
        player: {}
    };
    self.addNewPlayer = function() {
        console.log("player in the post", self.players.player);

        $http({
            method: 'POST',
            url: '/players',
            data: self.players.player
        }).then(function(response) {
            console.log('getPlayers response', response);
        });
    };
    // self.addNewPlayer();

}])
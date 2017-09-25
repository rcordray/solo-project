webApp.service('secondService', ['$http', '$location', function($http, $location) {
    console.log('second service loaded');

    var self = this;
    self.players = {
        player: {},
        list: []
    };

    self.getPlayers = function() {
        $http({
            method: 'GET',
            url: '/players'
        }).then(function(response) {
            console.log('getPlayers response',
                response);

            self.players.list = response.data;
        });
    };

    self.addNewPlayer = function() {
        console.log("player in the post", self.players.player);

        $http({
            method: 'POST',
            url: '/players',
            data: self.players.player
        }).then(function(response) {
            console.log('getPlayers response', response);
            $location.path('/search')
        }).then(function() {
            $location.reload('/search')
        })
    };

    self.getPlayers();

    self.editPlayerNotes = function(player) {
        console.log('put hit!', player);

        $http({
            method: 'PUT',
            url: '/players',
            data: player
        }).then(function(response) {
            console.log('notes edited', response.data);
            self.getPlayers();

        })

    };


    self.deletePlayer = function(id) {
        console.log('delete hit!', id);

        $http({
            method: 'DELETE',
            url: '/players/' + id,
            success: function(response) {
                console.log('are we here?');

                self.getPlayers();
            }

        })

    }
}]);
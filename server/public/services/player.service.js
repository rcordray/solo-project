app.service('PlayerService', ['$http', function($http) {
    var self = this

    self.players = {
        list: []
    }

    self.getPlayers = function() {
        $http({
            method: 'GET',
            url: '/players',
        }).then(function(response) {
            console.log(response);
            self.players.list = response.data
        })
    };

    self.getPlayers();
}]);
webApp.service('webService', ['$http', function($http) {
    console.log('webService Loaded');

    var self = this;
    self.players = { list: [] }
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
    self.getPlayers();


}])
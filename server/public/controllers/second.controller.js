webApp.controller('secondController', ['secondService', '$http', function(secondService, $http) {
    console.log('Post Controller loaded');

    var self = this;
    self.players = secondService.players;
    self.addNewPlayer = secondService.addNewPlayer;
    self.editPlayerNotes = secondService.editPlayerNotes;

    var api_key = 'unwp9ehzs7tsu892xt3bex4t'

    self.getPlayers = function() {

        var baseUrl = 'http://api.sportradar.us/mlb-t6/seasontd/2016/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?';
        baseUrl += 'api_key=' + api_key;
        baseUrl += '&limit=25';

        console.log('baseUrl: ', baseUrl);

        $http.get(baseUrl).then(function(response) {
            self.minResult = response.data;
            console.log('twins: ', response.data);

        })
    }
}])
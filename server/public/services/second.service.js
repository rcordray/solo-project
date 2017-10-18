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
        swal({
            title: 'Add this player?',
            text: "This player will be added!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add them!'
        }).then(function() {
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

        })
        self.getPlayers();
    };


    self.editPlayerNotes = function(player) {
        console.log('put hit!', player);

        $http({
            method: 'PUT',
            url: '/players',
            data: player
        }).then(function(response) {
            console.log('notes edited', response.data);

        })
        self.getPlayers();

    };


    self.deletePlayer = function(id) {
        console.log('delete hit!', id);

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            $http({
                method: 'DELETE',
                url: '/players/' + id,
                success: function(response) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    self.getPlayers();
                }
            })

        })
    }
}]);
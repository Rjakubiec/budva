'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin) {

    $scope.login = function() {
        console.log('test');
        $fblogin({
            fbId: '{FB app id}',
            success: function(data) {
                console.log('Basic public user data returned by Facebook', data);
            },
            error: function(error) {
                console.log('An error occurred.', error);
            }
        });
    };
});

'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin) {

    $scope.login = function() {
        console.log('test');
        $fblogin({
            fbId: '222660488094320',
            permissions: 'email,user_photos',
            success: function(data) {
                console.log(data);
                $scope.Dane = function() {
                    return [
                       data
                    ];}
                },
                    error: function(error) {
                        console.log('An error occurred.', error);
                    }
            });
    };

});

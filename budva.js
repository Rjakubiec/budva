'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin) {

    $scope.login = function() {
        console.log('test');
        $fblogin({
            fbId: '222660488094320',
            success: function(data) {
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

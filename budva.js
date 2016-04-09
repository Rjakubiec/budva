'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin) {

    $scope.login = function() {
        console.log('test');
        $fblogin({
            fbId: '222660488094320',
            permissions: 'email,user_birthday',
            fields: 'first_name,last_name,locale,email,birthday',
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

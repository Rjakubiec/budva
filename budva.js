'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin) {

    $scope.login = function() {
console.log('test');
        $fblogin({
            
            fbId: '222660488094320',
            permissions: 'email,user_birthday',
            success: function(data) {             
                console.log('User birthday' + data.birthday + 'and email ' + data.email);
            }
        });
    };
});

'use strict';

Budva.controller('BudvaCtrl', function($scope, $fblogin,$http) {

    $scope.brawoTy=true;

    $scope.login = function() {
        $scope.brawoTy=false;
        $fblogin({
            fbId: '222660488094320',
            permissions: 'email,user_birthday',
            fields: 'first_name,last_name,email,birthday,picture',
            success: function(data) {
                console.log(data);
                $http.post('https://budvatrip.herokuapp.com/zapisany', data)
                .then(function () {
                    console.log('dodano');
        

                });            
                    return [
                        $scope.imie=data.first_name,
                       data.last_name,
                      $scope.zdj=data.picture.data.url
                    ];
                },
                    error: function(error) {             
                        console.log('An error occurred.', error);
                    }
            });
    };

});

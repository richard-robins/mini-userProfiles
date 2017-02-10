angular.module('userProfiles').controller('MainController', function($scope, mainService){



    $scope.users = mainService.getUsers();

    $scope.toggleFavorite = function(userId){
      $scope.users = mainService.toggleFavorite(userId);
    }
})

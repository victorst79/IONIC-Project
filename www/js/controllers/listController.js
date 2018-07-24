angular.module('starter')

.controller( 'listCtrl' , function($scope , apiService) {

	apiService.getCardList()
		.success(function(response) {
            console.log(response);
            $scope.cardsList = response.cards;
        })
        .error(function(error, status) {
            console.log(error);
        });

        
	
} );
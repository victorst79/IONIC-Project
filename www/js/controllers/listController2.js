angular.module('starter')

.controller( 'listCtrl2' , function($scope , apiService) {

	apiService.getCardList2()
		.success(function(response) {
            console.log(response);
            $scope.cardsList = response.cards;
        })
        .error(function(error, status) {
            console.log(error);
        });
    
	
} );
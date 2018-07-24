angular.module('starter')
	.controller( 'searchCtrl' , function($scope , apiService , $stateParams ){
		
	var nombre_carta = $stateParams.search;

	apiService.getCardName(nombre_carta)
		.success(function(response) {
            console.log(response);
            $scope.cardsList = response.cards;
        })
        .error(function(error, status) {
            console.log(error);
        });
   

	} );

	
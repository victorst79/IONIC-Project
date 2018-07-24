angular.module('starter')

// Consulta API

.factory( 'apiService' , function($http){
	return {
			getCardList: function(){

				return $http({
					method: 'GET',
					url: 'https://api.magicthegathering.io/v1/cards?set=ktk&colors=red,white,blue',
					params: {}
				} );

			},

			getCardList2: function(){

				return $http({
					method: 'GET',
					url: 'https://api.magicthegathering.io/v1/cards?power=gt3&cmc=lte6',
					params: {}
				} );

			},

			getCardName: function(nombre_carta){
				return $http({
					method: 'GET',
					url: 'https://api.magicthegathering.io/v1/cards',
					params: {
						name: nombre_carta
					}
            });
        }
    }
});

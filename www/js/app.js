angular.module('starter', [ 'ionic' ] )

.config( function( $stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      } )

      .state('search',{
        url: 'search:search',
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      } )

      .state('list',{
        url: 'list',
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      } )

      .state('list2',{
        url: 'list2',
        templateUrl: 'templates/list2.html',
        controller: 'listCtrl2'
      } ) 

    $urlRouterProvider.otherwise('');

} )

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

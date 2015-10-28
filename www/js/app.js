// Ionic myShop App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'myShop' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'myShop.services' is found in services.js
// 'myShop.controllers' is found in controllers.js
angular.module('myShop', ['ionic', 'myShop.controllers', 'myShop.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.pricetags', {
      url: '/pricetags',
      views: {
        'tab-pricetags': {
          templateUrl: 'views/pricetags/pricetags.html',
          controller: 'PricetagsCtrl'
        }
      }
    })
    

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'views/cart/cart.html',
        controller: 'CartCtrl'
      }
    }
  })

  .state('tab.person', {
      url: '/person',
    views: {
      'tab-person': {
        templateUrl: 'views/person/person.html',
        controller: 'PersonCtrl'
      }
    }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

angular
  .module('app', [
   'ngRoute',
   'app:home'
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  });

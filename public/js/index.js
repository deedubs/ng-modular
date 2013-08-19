angular
  .module('app', [
   'ngRoute',
   'app:home',
   'app:settings'
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  });


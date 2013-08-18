var mod = angular.module('app', [
 'ngRoute',
 'app:home'
]);

mod.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});

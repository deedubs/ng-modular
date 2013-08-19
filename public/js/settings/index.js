angular
  .module('app:settings', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        controller: 'settings:index',
        templateUrl: '/js/settings/views/index.html'
      });
  })
  .run(function () {
    console.log('app:settings');
  });

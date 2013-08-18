angular
  .module('app:home', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'home:index',
        templateUrl: '/js/home/views/index.html'
      });
  })
  .run(function () {
    console.log('app:home');
  });

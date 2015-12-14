angular.module('xmlinterceptor', ['xmlxmlinterceptor.controllers', 'xmlxmlinterceptor.serves', 'xml']);

myApp.config(['$httpProvider', function($httpProvider){
   $httpProvider.interceptors.push('xmlHttpInterceptor');
}]);
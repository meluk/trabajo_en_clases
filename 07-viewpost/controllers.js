angular.module('polymer.controllers',[])

.controller('HomeController', ['$scope' ,function($scope){
     $scope.title = 'Hello World';
     $scope.promotions = [
     	{name: 'Coca Cola', price:'$3'},
     	{name: '7up', price:'$4'},
     	{name: 'Pepsi', price:'$3'}
     ];

     $scope.add = function(){
     	var newpromotion = angular.copy($scope.newpromotion);
     	$scope.promotions.push(newpromotion);
     };
}])

.controller('ProductsController', [function(){

}])

.controller('VideosController', ['$scope', function($scope){
     var video = document.querySelector("video");

     $scope.play = function(){
          video.play();
     };
     $scope.pause = function(){
          video.pause();
     };
}]);
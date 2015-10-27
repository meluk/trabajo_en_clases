angular.module('bootstrap.controllers',[])

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

}]);
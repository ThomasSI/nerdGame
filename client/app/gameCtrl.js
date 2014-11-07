/**
 * Created by thomas.schulz on 07.11.2014.
 */


angular.module("app").controller( "gameCtrl" , function($scope , socket){

  console.log(socket);

  $scope.test = "fdgdgd";


  $scope.awesomeThings = [];





  $scope.addThing = function() {
    if($scope.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: $scope.newThing });
    $scope.newThing = '';
  };



  $scope.moveGamer = function (event) {

    console.log(event.charCode);
  };


} );
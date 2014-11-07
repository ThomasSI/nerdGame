/**
 * Created by thomas.schulz on 07.11.2014.
 */


angular.module("app").controller( "gameCtrl" , function($scope , socket){


  //socket.connect();

  socket.emit("join" , {});

  socket.on("new game" , function (gamer) {
    console.log(gamer);
  });


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
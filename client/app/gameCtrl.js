/**
 * Created by thomas.schulz on 07.11.2014.
 */


angular.module("app").controller( "gameCtrl" , function($scope , socket){

  $scope.gamer = [];

  /* join the game */
  socket.emit("join" , {});








  $scope.moveGamer = function (event) {

    console.log(event.charCode);
  };


  socket.on("new gamer" , function (gamer) {
    console.log(gamer);
    for( key in gamer ){
      $scope.gamer.push(gamer[key]);
    }
  });

  socket.on('gamer left' , function (gamerId) {
    for( var i = 0; i < $scope.gamer.length; i++   ){
      if( $scope.gamer[i].id === gamerId ){
        $scope.gamer.splice(i,1);
        return;
      }
    }
  })

} );
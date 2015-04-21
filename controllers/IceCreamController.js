Restaurant.controller('IceCreamCtrl', function IceCreamCtrl($scope, RestaurantFactory) {
  $scope.iceCream = [];
  $scope.RestaurantFactory = RestaurantFactory;
  $scope.scoopOptions = ["1", "2", "3"];

  $scope.scoops = $scope.scoopOptions[0];

  $scope.addIceCream = function() {

    $scope.iceCream.push({ scoops: $scope.scoops, price: (parseInt($scope.scoops) * 2) });
  };

  $scope.icePrice = function() {

    return $scope.RestaurantFactory.calcPrice($scope.iceCream);
  };

  $scope.deleteIceCream = function(scoops) {
    var index = $scope.iceCream.indexOf(scoops);
    $scope.iceCream.splice(index, 1);
  };

});

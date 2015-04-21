Restaurant.controller('PizzaCtrl', function PizzaCtrl($scope, RestaurantFactory) {
  $scope.pizzas = [];
  $scope.RestaurantFactory = RestaurantFactory;
  var pizzaCounter = 0;

  $scope.addPizza = function() {

    var pizzaPrice = {'slice': 2, 'small': 10, 'medium': 12, 'large': 14};

    $scope.pizzas.push({id: pizzaCounter, size: $scope.pizzaSize, price: pizzaPrice[$scope.pizzaSize] })
    $scope.pizzaSize = null;
    pizzaCounter++;
  };

  $scope.pizzaPrice = function() {

    return $scope.RestaurantFactory.calcPrice($scope.pizzas);

  };

  $scope.deletePizza = function(pizza) {
    var index = $scope.pizzas.indexOf(pizza);
    $scope.pizzas.splice(index, 1);
  };

});

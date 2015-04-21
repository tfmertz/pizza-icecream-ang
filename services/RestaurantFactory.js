Restaurant.factory('RestaurantFactory', function RestaurantFactory() {

  var factory = {};
//  factory.pizzas = [];

  factory.calcPrice = function(itemArray) {
    var total = 0;
    itemArray.forEach(function(element) {
      console.log(element);
      total += element.price;
    });

    return total;
  };

  return factory;
});

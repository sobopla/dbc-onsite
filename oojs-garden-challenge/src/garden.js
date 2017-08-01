/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/
//  constructor function example
//  var Garden = function(name, location, flowers){
//   var this.name = name;
//   var this.location = location;
//   var this.flowers = flowers;
// };

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: []
};

// add a flower to the flowers array
garden.addFlower = function(newFlower) {
  garden.flowers.push(newFlower)
};

// add multiple flowers to the flowers array
garden.plant = function(arrayOfFlowers){
  arrayOfFlowers.forEach(function(f) {
    garden.flowers.push(f)
  }
)};

// remove a flower from flowers array
garden.remove = function(flower){
 var index = garden.flowers.indexOf(flower);
 garden.flowers.splice(index, 1)
};

// filter flowers by color
garden.flowersByColor = function(color){
 var colorMatch = garden.flowers.filter(function(f){
  return f.color == color
  });
  return colorMatch
};


//filter flowers by name
garden.flowersByName = function(name){
  var nameMatch = garden.flowers.filter(function(f){
    return f.name == name
  });
  return nameMatch
};

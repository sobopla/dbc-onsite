

describe("a flower object", function(){
  var myFlower;

  beforeEach(function() {
      myFlower = new Flower("rose", "red");
  });

  it("has a name", function() {
    expect(myFlower.name).toEqual("rose");
  });

  it("has a color", function() {
    expect(myFlower.color).toEqual("red");
  });

});

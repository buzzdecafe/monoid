
describe("Monoid:", function() {

  describe("constructed-style", function() {
    it("takes a name, an associative function, and an idenity element and returns a monoid", function() {
      var monoid = new M1("Addition", function(a, b) { return a + b; }, 0);
      expect(typeof monoid.mappend).toBe("function");
      expect(typeof monoid.mconcat).toBe("function");
    });

    describe("mconcat", function() {
      it("can take a list of elements and fold/mappend them", function() {
        var monoid = new M1("Multiplication", function(a, b) { return a * b; }, 1);
        expect(monoid.mconcat([2,4,5])).toEqual(40);
      });
    });
  });

  describe("Object.create-style", function() {
    it("takes a name, an associative function, and an idenity element and returns a monoid", function() {
      var monoid = M2("Addition", function(a, b) { return a + b; }, 0);
      expect(typeof monoid.mappend).toBe("function");
      expect(typeof monoid.mconcat).toBe("function");
    });

    describe("mconcat", function() {
      it("can take a list of elements and fold/mappend them", function() {
        var monoid = M2("Multiplication", function(a, b) { return a * b; }, 1);
        expect(monoid.mconcat([2,4,5])).toEqual(40);
      });
    });
  });


});

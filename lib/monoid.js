eweda.installTo(this);

// constructed style
var M1 = (function() {
  function Monoid(name, append, empty) {
    this.name = name;
    this.mappend = append;
    this.mempty = empty;
  }

  Monoid.prototype.mconcat = function(list) {
    return foldl(this.mappend, this.mempty, list);
  };
  
  return Monoid;
}());


var M2 = (function() {

  // Object.create style
  var Monoid = {
    mappend: function() { throw Error("mappend not overridden"); },
    mempty: null,
    mconcat: function(list) {
      return foldl(this.mappend, this.mempty, list);
    }
  };

  function mkMonoid(name, append, empty, begetter) {
    begetter = begetter || Monoid;
    return Object.create(begetter, {
      name: {value: name},
      mappend: {value: append},
      mempty: {value: empty}
    });
  };

  return mkMonoid;

}());


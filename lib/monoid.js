
Monoid = {
  type: "Addition",
  mappend: function(a, b){ return a + b; },
  mempty: 0,
  mconcat: foldl(this.mappend, this.empty);
}




define(["Dependency"], function(dependency) {
  return {
    getStatus:function() {
      return dependency.getValue() === 0 ? "red" : "green";
    }
  };
});

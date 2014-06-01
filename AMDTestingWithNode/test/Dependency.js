var requirejs = require("requirejs");

requirejs.config({baseUrl:process.cwd()});

describe("Dependency", function() {
  describe("getValue", function() {
    it("should throw an exception", function() {
      var dependency = requirejs("lib/Dependency");
      (function() {
        dependency.getValue();
      }).should.throw();
    });
  });
});
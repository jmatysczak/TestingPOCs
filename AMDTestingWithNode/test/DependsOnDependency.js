var requirejs = require("requirejs");

requirejs.config({baseUrl:process.cwd()});

describe("DependsOnDependency", function() {
  describe("getStatus", function() {
    function forValueStatusShouldBe(value, status, done) {
      var Squire = requirejs("node_modules/squirejs/src/Squire.js");
      new Squire()
        .mock("Dependency", {getValue: function() {
          return value;
        }})
        .require(["lib/DependsOnDependency"], function(dependsOnDependency) {
          dependsOnDependency.getStatus().should.equal(status);
          done();
        });
    }

    it("should return 'red' when Dependency.getValue returns 0", function(done) {
      forValueStatusShouldBe(0, "red", done);
    });

    it("should return 'green' when Dependency.getValue returns 1", function(done) {
      forValueStatusShouldBe(1, "green", done);
    });
  });
});

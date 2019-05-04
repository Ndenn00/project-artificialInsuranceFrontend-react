//var quoteUtility = require('../src/utility/QuoteUtil');
// var dateUtility = require('../src/utility/DateUtil');
var assert = require("chai").assert;
var moment = require("moment");
var quoteUtility = require("../src/utility/QuoteUtil");
var dateUtility = require("../src/utility/DateUtil");

describe("#basePrice()", function() {
  context("Test the functionality of basePrice method", function() {
    it("returns a number", function() {
      var actual = quoteUtility.basePrice();
      assert.typeOf(actual, "number", "is a type of number");
    }),
      it("returns a positive number", function() {
        var actual = quoteUtility.basePrice();

        assert.isAbove(actual, 0, "is over zero");
      }),
      it("returns exactly 400", function() {
        var actual = quoteUtility.basePrice();
        var expected = 400;

        assert.equal(actual, expected, "are equal");
      });
  });
});

describe("#differenceInYears", function() {
  context("when is called", function() {
    it("returns a number", function() {
      var actual = dateUtility.differenceInYears();

      assert.typeOf(actual, "number", "is a type of number");
    });
  }),
    context("when passed a number", function() {
      it("returns one when passed a year ago", function() {
        var yesterday = moment()
          .subtract(1, "year")
          .calendar();

        var actual = dateUtility.differenceInYears(yesterday);
        var expected = 1;
        assert.equal(expected, actual, "are equal");
      }),
        it("returns two when passed a two years ago", function() {
          var twoYears = moment()
            .subtract(2, "year")
            .calendar();
          var actual = dateUtility.differenceInYears(twoYears);
          var expected = 2;
          assert.equal(expected, actual, "are equal");
        }),
        it("returns thirty two when passed a 09/10/1986 years ago", function() {
          var actual = dateUtility.differenceInYears("1986-10-09");
          var expected = 32;
          assert.equal(expected, actual, "are equal");
        });
    });
});

describe("#ageCalculation", function() {
  context("given an age", function() {
    it("returns a number", function() {
      var actual = quoteUtility.ageCalculation("2002-01-01", 400);

      assert.typeOf(actual, "number", "is a type of number");
    }),
      it("takes base price 400 and age 17, returns 40", function() {
        var expected = 40;
        var actual = quoteUtility.ageCalculation("2002-01-01", 400);

        assert.equal(actual, expected, "are equal");
      }),
      it("takes base price of 400 and age 26, returns 20", function() {
        var expected = 20;
        var actual = quoteUtility.ageCalculation("1993-01-01", 400);

        assert.equal(actual, expected, "are equal");
      }),
      it("takes base price of 400 and age 61, returns 40", function() {
        var expected = 40;
        var actual = quoteUtility.ageCalculation("1948-01-01", 400);

        assert.equal(actual, expected, "are equal");
      }),
      it("takes a base price of 500 at age 17, returns 50", function() {
        var expected = 50;
        var actual = quoteUtility.ageCalculation("2002-01-01", 500);
        assert.equal(actual, expected, "are equal");
      }),
      it("takes a base price of 500 at age 26, returns 25", function() {
        var expected = 25;
        var actual = quoteUtility.ageCalculation("1993-01-01", 500);
        assert.equal(actual, expected, "are equal");
      });
  });
});

describe("#accidentWithinSixYears()", function() {
  context("Given No Accidents Occured", function() {
    it("returns zero", function() {
      var expected = 0;
      var actual = quoteUtility.accidentWithinSixYears(false);

      assert.equal(actual, expected, "are equal");
    });
  }),
    context("Given Accidents Occured", function() {
      it("returns 50", function() {
        var expected = 50;
        var actual = quoteUtility.accidentWithinSixYears(true);

        assert.equal(actual, expected, "are equal");
      });
    });
});

describe("#drivingExperienceCalculation()", function() {
  context("when given a positive number", function() {
    it("returns a positive number", function() {
      var actual = quoteUtility.drivingExperienceCalculation(1, 400);
      assert.typeOf(actual, "number", "is a type of number");
    });
  }),
    context("when given years driving experience and a base price", function() {
      it("returns 40 when given 1 year and a base price of 400", function() {
        var expected = 40;
        var actual = quoteUtility.drivingExperienceCalculation(1, 400);
        assert.equal(actual, expected, "are equal");
      }),
        it("returns 20 when given 5 years and a base price of 400", function() {
          var expected = 20;
          var actual = quoteUtility.drivingExperienceCalculation(6, 400);
          assert.equal(actual, expected, "are equal");
        }),
        it("returns 4 when given 31 years and a base price of 400", function() {
          var expected = 4;
          var actual = quoteUtility.drivingExperienceCalculation(31, 400);
          assert.equal(actual, expected, "are equal");
        }),
        it("returns 20 when given 45 years and a base price of 400", function() {
          var expected = 20;
          var actual = quoteUtility.drivingExperienceCalculation(45, 400);
          assert.equal(actual, expected, "are equal");
        });
    });
});

describe("#vinCalculation()", function() {
  context("when given a string that contains a vin number", function() {
    it("returns zero when last char ends in anything but J", function() {
      var expected = 0;
      var actual = quoteUtility.vinCalculation("xxxxxxx");

      assert.equal(actual, expected, "are equal");
    }),
      it("returns 50 when last char ends in J", function() {
        var expected = 50;
        var actual = quoteUtility.vinCalculation("xxxxxxj");

        assert.equal(actual, expected, "are equal");
      });
  });
});

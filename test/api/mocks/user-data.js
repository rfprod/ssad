var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;
var userData = require("../../../api/mocks/user-data").userData;

describe("mocks", function() {
  describe("user-data", function() {
    const userDataKeys = Object.keys(userData);
    console.log("userDataKeys:", userDataKeys);

    it("shold have proper amount of user creadentials defined", function() {
      expect(userDataKeys.length).to.equal(2);
    });

    it("shold have proper user creadentials defined", function() {
      const key1 = userDataKeys[0];
      const key2 = userDataKeys[1];

      expect(key1).to.equal("user1");
      expect(key2).to.equal("user2");

      expect(userData[key1]).to.equal("password1");
      expect(userData[key2]).to.equal("password2");
    });
  });
});

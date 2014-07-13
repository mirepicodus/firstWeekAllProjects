describe("coinMachine", function() {
  it("should determine the amount of change from given amount", function() {
    coinMachine(85).should.eql([3,1,0,0]);
  });
});

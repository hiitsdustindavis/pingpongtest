describe('pingPong', function() {
  it("will return false if user enters a number less than one", function() {
    expect(pingPong(0)).to.equal(false);
  });
  it("will return false if user enters a non number", function() {
    expect(pingPong("brad")).to.equal(false);
  });
  it("will return '1, 2, ping' if user enters a '3'", function() {
    expect(pingPong("3")).to.equal("1, 2, ping");
  });
});

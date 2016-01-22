describe('nonnumber', function() {
  it("will return false if user enters a number less than one", function() {
    expect(nonnumber(0)).to.equal(false);
  });
  it("is false if user enters a non number", function() {
    expect(nonnumber("brad")).to.equal(false);
  });
});
describe('number', function() {
  it("return 'ping' if number is divisible by 3", function() {
    expect(number("6")).to.equal("ping");
  });
  it("return 'pong' if number is divisible by 5", function() {
    expect(number("10")).to.equal("pong");
  });
});

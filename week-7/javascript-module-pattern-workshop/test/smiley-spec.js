describe("smiley", function() {
  it("takes some text and returns the text with a space and a smiley appended", function() {
    expect(smiley("hello")).toBe("hello :)");
  });

});

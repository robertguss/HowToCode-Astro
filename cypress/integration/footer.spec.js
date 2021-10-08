describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the current year", () => {
    const date = new Date().getFullYear();

    cy.getBySel("footer-text").contains(date);
  });
});

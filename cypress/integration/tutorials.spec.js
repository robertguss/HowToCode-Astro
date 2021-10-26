describe("/tutorials", () => {
  beforeEach(() => {
    cy.visit("//tutorials");
  });

  it("renders the correct header", () => {
    cy.getBySel("header-title").contains("Tutorials");
  });

  it("renders 5 Tutorials", () => {
    cy.getBySel("tutorials").within(() => {
      cy.get("a").its("length").should("equal", 5);
    });
  });
});

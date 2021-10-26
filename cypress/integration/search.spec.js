describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/search");
  });

  it("renders the correct header", () => {
    cy.getBySel("header-title").contains("Search");
  });

  it("search for 'Go' returns Go Basics articles", () => {
    // Searching for "Go"
    cy.getBySel("search-input").type("Go");
    cy.get("#searchResults").should("be.visible");
    cy.get(".searchResultPage")
      .its(0)
      .within(() => {
        cy.get(".searchResultTitle").contains("Go");
      });
  });

  it("search for 'JavaScript' returns JavaScript articles", () => {
    cy.getBySel("search-input").clear().type("JavaScript");
    cy.get("#searchResults").should("be.visible");
    cy.get(".searchResultPage")
      .its(0)
      .within(() => {
        cy.get(".searchResultTitle").contains("JavaScript");
      });
  });
});

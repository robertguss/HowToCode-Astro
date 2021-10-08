describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/search");
  });

  it("renders the correct results", () => {
    // Searching for "Go"
    cy.getBySel("search-input").type("Go");
    cy.get("#searchResults").should("be.visible");
    cy.get(".searchResultPage")
      .its(0)
      .within(() => {
        cy.get(".searchResultTitle").contains("Go");
      });

    // Searching for JavaScript
    cy.getBySel("search-input").clear().type("JavaScript");
    cy.get("#searchResults").should("be.visible");
    cy.get(".searchResultPage")
      .its(0)
      .within(() => {
        cy.get(".searchResultTitle").contains("JavaScript");
      });

    // Searching for Elixir
    cy.getBySel("search-input").clear().type("Elixir");
    cy.get("#searchResults").should("be.visible");
    cy.get(".searchResultPage")
      .its(0)
      .within(() => {
        cy.get(".searchResultTitle").contains("Elixir");
      });
  });
});

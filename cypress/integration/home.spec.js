describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the correct header", () => {
    cy.getBySel("header-title").contains("How To Code");
  });

  it("the See All link at the bottom of the posts links to the /posts page", () => {
    cy.getBySel("see-all-link").contains("See All").click();
    cy.location("pathname").should("equal", "/posts");
  });

  it("renders a total of 6 articles", () => {
    cy.getBySel("articles-section").within(() => {
      cy.getBySel("article-card").its("length").should("equal", 6);
    });
  });
});

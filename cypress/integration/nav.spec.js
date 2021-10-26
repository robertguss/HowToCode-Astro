describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("The Free Books link goes to the /books page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("link-free-books").click();
    });

    cy.location("pathname").should("equal", "/books");
  });

  it("The Articles link goes to the /posts page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("link-articles").click();
    });

    cy.location("pathname").should("equal", "/posts");
  });

  it("The Courses link goes to the /courses page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("link-courses").click();
    });

    cy.location("pathname").should("equal", "/courses");
  });

  it("The Tutorials link goes to the /tutorials page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("link-tutorials").click();
    });

    cy.location("pathname").should("equal", "/tutorials");
  });

  it("The Search link goes to the /search page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("link-search").click();
    });

    cy.location("pathname").should("equal", "/search");
  });
});

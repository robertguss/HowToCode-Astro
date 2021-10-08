describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(200);
  });

  it("the nav menu is displayed when the resources button is clicked", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Free Books link goes to the /subscribe page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(0).click();
    });

    cy.location("pathname").should("equal", "/subscribe");
  });

  it("The Articles link goes to the /posts page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(1).click();
    });

    cy.location("pathname").should("equal", "/posts");
  });

  it("The Courses link goes to the /courses page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(2).click();
    });

    cy.location("pathname").should("equal", "/courses");
  });

  it("The Tutorials link goes to the /tutorials page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(3).click();
    });

    cy.location("pathname").should("equal", "/tutorials");
  });

  it("The Search link goes to the /search page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(4).click();
    });

    cy.location("pathname").should("equal", "/search");
  });
});

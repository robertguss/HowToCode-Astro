describe("/courses", () => {
  beforeEach(() => {
    cy.visit("//courses");
  });

  it("renders the correct header", () => {
    cy.getBySel("header-title").contains("Courses");
  });

  it("renders 2 courses", () => {
    cy.getBySel("courses").within(() => {
      cy.getBySel("course-1").should("be.visible");
      cy.getBySel("course-2").should("be.visible");
    });
  });

  it("renders the correct course titles", () => {
    cy.getBySel("courses").within(() => {
      cy.getBySel("course-1").within(() => {
        cy.getBySel("course-title").contains("Webpack 5 Fundamentals");
      });

      cy.getBySel("course-2").within(() => {
        cy.getBySel("course-title").contains("Learn Webpack 2 from scratch");
      });
    });
  });
});

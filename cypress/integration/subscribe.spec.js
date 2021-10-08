describe("Subscribe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/subscribe");
  });

  it("renders the correct header", () => {
    cy.getBySel("header-title").contains("Subscribe");
  });

  // https://glebbahmutov.com/blog/form-validation-in-cypress/
  it("does NOT accept an invalid email", () => {
    cy.get("#tlemail,input:valid").should("have.length", 1);

    cy.getBySel("subscribe-input").type("john@");
    cy.getBySel("subscribe-submit-btn").click();

    cy.get("#tlemail,input:invalid").should("have.length", 1);
  });

  it.only("does accept an invalid email", () => {
    cy.get("#tlemail,input:valid").should("have.length", 1);

    cy.getBySel("subscribe-input").type("john@test.com");
    cy.getBySel("subscribe-submit-btn").click();

    cy.get("#tlemail,input:valid").should("have.length", 1);
  });
});

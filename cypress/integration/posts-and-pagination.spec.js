describe("/posts and pagination", () => {
  context("Page 1", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/posts");
    });

    it("renders the correct header", () => {
      cy.getBySel("header-title").contains("Articles");
    });

    it("renders 21 articles", () => {
      cy.getBySel("articles-section").within(() => {
        cy.getBySel("article-card").its("length").should("equal", 21);
      });
    });

    it("displays the correct page number in the header", () => {
      cy.getBySel("header-description").contains("page 1");
    });

    it("/posts only displays the paginator next button", () => {
      cy.getBySel("paginator-next").should("be.visible");
      cy.getBySel("paginator-prev").should("not.exist");
    });

    it("clicking the paginator next button goes to page 2", () => {
      cy.getBySel("paginator-next").click();
      cy.location("pathname").should("equal", "/posts/2/");
    });
  });

  context("Page 2", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/posts/2/");
    });

    it("renders 21 articles", () => {
      cy.getBySel("articles-section").within(() => {
        cy.getBySel("article-card").its("length").should("equal", 21);
      });
    });

    it("page 2 displays the correct page number in the header", () => {
      cy.getBySel("header-description").contains("page 2");
    });

    it("/posts/page/2 displays both the paginator next and prev buttons", () => {
      cy.getBySel("paginator-next").should("be.visible");
      cy.getBySel("paginator-prev").should("be.visible");
    });
  });

  context("Page 3", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/posts/3/");
    });

    it("page 3 displays the correct page number in the header", () => {
      cy.getBySel("header-description").contains("page 3");
    });

    it("/posts/page/3 displays only the paginator prev button", () => {
      cy.getBySel("paginator-next").should("not.exist");
      cy.getBySel("paginator-prev").should("be.visible");
    });
  });
});

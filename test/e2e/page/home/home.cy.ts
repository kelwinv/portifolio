describe("Maintenance page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a link for old website", () => {
    cy.get('a[href="https://portifolio-git-main-kelwinv.vercel.app"]')
      .should("have.text", "Site antigo")
      .should("be.visible");
  });
});

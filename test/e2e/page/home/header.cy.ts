describe("First cy test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("home should be image logo", () => {
    cy.get("header").within(() => {
      cy.get("img[alt=logo]").should("exist");
    });
  });
});

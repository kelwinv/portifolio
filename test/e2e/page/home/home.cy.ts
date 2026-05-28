describe("Portfolio home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should scroll to About section when clicking Ver trajetória", () => {
    cy.contains("button", "Ver trajetória").click();
    cy.window().its("scrollY").should("be.gt", 0);
    cy.get("#sobre").should("exist");
  });

  it("should open mobile menu on small viewport", () => {
    cy.viewport(375, 667);
    cy.get('button[aria-label="Abrir menu"]').click();
    cy.get("#mobile-nav-drawer").should("be.visible");
    cy.get('button[aria-label="Fechar menu"]').click();
  });
});

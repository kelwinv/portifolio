describe("Portfolio home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should scroll to About section when clicking Ver trajetória", () => {
    cy.contains("button", "Ver trajetória").click();
    cy.window().its("scrollY").should("be.gt", 0);
    cy.get("#sobre").should("exist");
  });

  it("should highlight Sobre in desktop nav and update hash", () => {
    cy.viewport(1280, 800);
    cy.get('nav[aria-label="Principal"]').contains("button", "Sobre").click();
    cy.location("hash").should("eq", "#sobre");
    cy.get('nav[aria-label="Principal"] button[aria-current="true"]').should(
      "contain",
      "Sobre",
    );
  });

  it("should scroll to Destaques corporativos when clicking Destaques in nav", () => {
    cy.viewport(1280, 800);
    cy.get('nav[aria-label="Principal"]')
      .contains("button", "Destaques")
      .click();
    cy.location("hash").should("eq", "#destaques");
    cy.get("#destaques").should("be.visible");
    cy.contains("h3", "Destaques corporativos").should("be.visible");
  });

  it("should scroll to Projetos pessoais when clicking Projetos in nav", () => {
    cy.viewport(1280, 800);
    cy.get('nav[aria-label="Principal"]')
      .contains("button", "Projetos")
      .click();
    cy.location("hash").should("eq", "#projetos");
    cy.get("#projetos").should("be.visible");
    cy.contains("h3", "Projetos pessoais").should("be.visible");
  });

  it("should open mobile menu on small viewport", () => {
    cy.viewport(375, 667);
    cy.get('button[aria-label="Abrir menu"]').click();
    cy.get("#mobile-nav-drawer").should("be.visible");
    cy.get('button[aria-label="Fechar menu"]').click();
  });
});

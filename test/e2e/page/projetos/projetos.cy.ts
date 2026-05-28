describe("Projetos page", () => {
  beforeEach(() => {
    cy.visit("/projetos");
  });

  it("shows full project grid with more than 5 items", () => {
    cy.contains("h1", "Todos os projetos").should("be.visible");
    cy.get("article").should("have.length.greaterThan", 5);
  });

  it("links back to portfolio", () => {
    cy.contains("a", "Voltar ao portfólio").should(
      "have.attr",
      "href",
      "/#projetos",
    );
  });
});

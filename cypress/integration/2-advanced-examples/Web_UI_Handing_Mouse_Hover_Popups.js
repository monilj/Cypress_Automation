/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Web Control for Handling Child tab with combination of Cypress and JQuery ", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get("#mousehover").invoke("show");
    cy.get(".mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});

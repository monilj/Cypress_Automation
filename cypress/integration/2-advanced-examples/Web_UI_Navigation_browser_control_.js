/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Web Control for Handling Child tab with combination of Cypress and JQuery ", function () {
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "qaclickacademy");
    cy.go("back");
  });
});

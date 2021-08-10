/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Handling Static Drop downs", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option2").should("have.value", "option2");
  });
  it("Handling Dynamic Drop downs", function () {
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });
});

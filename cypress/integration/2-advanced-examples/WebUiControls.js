/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Web Control Checkbox", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });
  it("Handling Static Drop downs", function () {
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

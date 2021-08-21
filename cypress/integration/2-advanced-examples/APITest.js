/// <reference types="cypress" />
describe("API Test Suite", function () {
  it("API Test ", function () {
    cy.request("POST", "http://216.10.245.166", {
      name: "Learn Appium Automation with Java",
      isbn: "bcd",
      aisle: "227",
      author: "John foe",
    }).then(function (response) {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.have(200);
    });
  });
});

class ProductListPage {
  getFinalCheckOutButton() {
    return cy.contains("Checkout");
  }
}
export default ProductListPage;

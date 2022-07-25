describe('ui-angular', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=headercomponent--primary&args=title;color;')
  );
  it('should render the component', () => {
    cy.get('ecommerce-header').should('exist');
  });
});

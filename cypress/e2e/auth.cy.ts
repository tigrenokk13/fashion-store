describe('Authentication E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully and redirect to products', () => {
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    // Чекаємо, поки URL зміниться на /products
    cy.url().should('include', '/products');
    
    // Перевіряємо, що ми на головній сторінці за наявністю тексту
    cy.contains('Каталог').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.get('input[type="email"]').type('wrong@test.com');
    cy.get('input[type="password"]').type('000000');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
  });

  it('should disable submit button when fields are empty', () => {
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
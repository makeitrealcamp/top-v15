describe('User authentication', () => {
  beforeEach(() => {
    cy.deleteMany({}, 'users')
      .then(() => {
        // cy.insertOne({ email: 'test@test.com', password: 'Password123' }, 'users')
        cy.request('post', 'http://localhost:8000/users/signup', {
          email: 'test@test.com',
          password: 'Password123'
        })
      })
  })

  it('should login user correctly', () => {
    cy.visit('http://localhost:3000');

    cy.get('#email').type('test@test.com');
    cy.get('#password').type('Password123');
    cy.get('[data-testid=signup]').click()

    cy.get('[data-cypress=tasks]').should('be.visible');
  });
})

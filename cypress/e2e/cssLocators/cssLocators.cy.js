describe('Css Locators', () => {
// tag id
// tag class
// tag attribute
// tag class attribute
    it('verify css locators', () => {
      cy.visit("https://www.flipkart.com/");
      cy.get("input[name='q']").type("T-shirts") // attribute  tag is optional
      cy.get("[type='submit']").click()
      cy.get(".BUOuZu").contains("T-shirts")// class  lactor and assertion
    })

    
  })
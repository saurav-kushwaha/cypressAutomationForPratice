describe('handling invisible and visible element ',()=>
{
    it('invisible and visible element',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // validating visiblity and invisblity of element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })







})
describe('Handling Invisble element',()=>{

    it('handle invisible element',()=>{
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // this code is generating error because on element is invisble
        //cy.get('.product').should('have.length',4)
        
        // use : visible because it will target only visible element
        cy.get('.product:visible').should('have.length',4)
    })

})

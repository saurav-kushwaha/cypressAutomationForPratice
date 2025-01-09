describe('Parent child chaining',()=>{

    it('parent child chaining',()=>{
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // cy.get('.products').find('.product').should('have.length',4)
        // // this wil generate error in future if more element added 
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // cy.get('.products').find('.product').eq(2).contains('✔ ADDED').should('be.visible')

        // dynamic way to find child element if more element added 
        // traversing through array using each method
        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()

                
            }
            
            
        })

        // using alisasing  in place of product 
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)
        // this wil generate error in future if more element added 
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
        
        cy.get('@productlocator').find('.product').eq(2).contains('✔ ADDED').should('be.visible')
    

        

        
    })

})

describe('MyFirstGlobalEnvVariables Suit',()=>{

    let userdata;
    before(()=>{
        cy.fixture('example').then((data)=>{
            userdata=data
        })
    })
    it('global environment variables ',()=>{
        // accessing url as global environment variable 
        cy.visit(Cypress.env('url'))
        cy.get(':nth-child(2) > .nav-link').click()
        
        // optimize the above code using custom cypress command
        userdata.productName.forEach((product)=>{
            cy.selectProduct(product)
        })

       

    })
})
describe('MyFirstCustomCypressCommand Suit',()=>{

    let userdata;
    before(()=>{
        cy.fixture('example').then((data)=>{
            userdata=data
        })
    })
    it('custom cypress commands ',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        // cy.selectProduct('iphone X')
        
        // optimize the above code using custom cypress command
        userdata.productName.forEach((product)=>{
            cy.selectProduct(product)
        })

       

    })
})
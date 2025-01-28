import  productPage  from '../../pageObject/product.js';
const product = new productPage();

describe('Product Page Object', () => {

    let userdata;
    before(()=>{
        cy.fixture('example').then((data)=>{
            userdata=data
        })
    })
    it('purchase  products', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        userdata.productName.forEach((product)=>{
            cy.selectProduct(product)
        })
        product.getClickOnCheckOutButton().click()
        product.getClickOnCheckOutButton2().click()
        product.getLocationInput().type('India')
        cy.wait(6000)
        product.getClickOnSuggestion().click()
        product.getCheckBox().click()
        product.getClickOnPurchaseBtn().click()
       // product.getSuccessMessage().should('have.text','Success! Thank you! Your order will be delivered in next few weeks')
        cy.contains('Success! Thank you! Your order will be delivered in next few weeks').should('be.visible')

       
    })
})
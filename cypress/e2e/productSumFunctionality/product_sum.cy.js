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
        // implemented product sum functionality
        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()// grabing the amount text
            var res = amount.split(" ")// spliting special characters from the amount text
            var total = res[1].trim()// getting the amount value
            sum = Number(total) + Number(sum)// summing up the amount value

        }).then(function () {
            cy.log(sum)// printing the sum value
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()// grabing total amount text
            var res = amount.split(" ")// spliting special characters from the total amount text
            var total = res[1].trim()// removing the special characters from the total amount value
            expect(Number(total)).to.equal(sum)// comparing the total amount value with the sum value
        })
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
describe("My second test suit",()=>{

    //let userdata;
    // before(()=>{
    //  cy.fixture('example.json').then((data)=>{
    //     userdata=data;

    //  })
    // })
    // it('MY first DataDriven Test',()=>{
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
    //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
    //     cy.get('.oxd-button').click()
    //     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    // }) 

  // Performing dataderiven testing using multiple test data from the fixture file
    it('DataDriven Test',()=>{
       cy.fixture("orange.json").then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
               data.forEach((userdata)=>{
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
                cy.get('.oxd-button').click()
               
                 // using if condition for validating
                if(userdata.username=="Admin" && userdata.password=="admin123")
                    {
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()// logout
                  
                   }
               else
               {
                  cy.get('.oxd-alert-content > .oxd-text')
                  .should('have.text',userdata.expected)
               }
    
    
            })
        })

    })

  
})  
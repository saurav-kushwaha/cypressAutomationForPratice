describe("handle dropdowns ",()=>{

   it.skip('dropdown with select',()=>{
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get('select#testingDropdown').select('Automation Testing')
        .should("have.value",'Automation')

        cy.get('select#testingDropdown').select('Database Testing')
        .should('have.value','Database')
     })



    // handling bootstrape dropdown
   it.skip('dropdown with input field ',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{Enter}')
        cy.get('#select2-billing_country-container').should('have.text','Japan')
      })


   it.skip('Auto suggest dropdown but list are static',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('input[id="searchInput"]').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
      })

   it('Dynamic dropdown ',()=>{
        cy.visit('https://www.google.com')
        cy.get('div.a4bIc').type('cypress automation')
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
         if($el.text() ==='cypress automation course')
         {
            cy.wrap($el).click()
         }

        })

        cy.get('textarea.gLFyf').should('have.value',"cypress automation course")
   })
})
describe('Check UI Element',()=>{

    it('checking radio buttons',()=>{

        cy.visit('https://artoftesting.com/samplesiteforselenium')

        // visibility of radio button
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        // selection of radio button

        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')


        cy.get('input#male').should('not.be.checked')
        cy.get('input#female').check().should('be.checked')

   })
    it('checking checkbox buttons',()=>{

        cy.visit('https://artoftesting.com/samplesiteforselenium')

        // visibility of checkboes button
        cy.get('input.Automation').should('be.visible')
        cy.get('input.Performance').should('be.visible')

        // selection of checkbox  button
        cy.get('input.Automation').check().should('be.checked')
        cy.get('input.Performance').check().should('be.checked')

        // validating value of checkbox
        cy.get('input.Automation').should('value','Automation')
        cy.get('input.Performance').should('value','Performance')

        //unselection of checkbox button
        cy.get('input.Automation').uncheck().should('not.be.checked')


        // selecting multiple checkbox at once
        cy.get("input[type='checkbox']").check().should('be.checked')

        // deselecting multiple checkbox at once     
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        // also use method first() and last before check()
         
         




    })

})
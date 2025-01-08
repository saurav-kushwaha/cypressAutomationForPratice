describe('Handling tabs',()=>{

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
    })
    it('1st Approach of handling tabs',()=>{
       // cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').invoke('removeAttr','target').click();
        cy.wait(8000)

        // validation
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new');
        cy.contains('New Window').should('be.visible');

        // Back to parent tab
        cy.go('back');
        cy.url().should('eq','https://the-internet.herokuapp.com/windows');
    })

    it('2nd Approach of handling tabs using Jquery',()=>{
        //cy.visit('https://the-internet.herokuapp.com/windows');
        
        cy.get('.example>a').then((e)=>{
            let url = e.prop('href');
            cy.visit(url);

        })

        // validation
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.contains('New Window').should('be.visible');
        cy.wait(8000)

        // Back to parent tab
        cy.go('back');
        cy.url().should('eq','https://the-internet.herokuapp.com/windows');
    })



})
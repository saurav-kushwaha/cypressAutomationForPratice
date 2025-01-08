describe('Mouse Operation',()=>{
    it('Mousehover',()=>{
        cy.visit('https://www.browserstack.com/')
        cy.get('[title="Status"]>span').should('not.be.visible');
        cy.get('#developers-dd-toggle').trigger('mouseover').click();
        cy.get('[title="Status"]>span').should('be.visible');

    })


    it('Mouse rightClick',()=>{

        /* Approach 1 tirgger contextmenu
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-icon-paste > span').should('not.be.visible');
        cy.get('.context-menu-one').trigger('contextmenu');
        cy.get('.context-menu-icon-paste > span').should('be.visible').should('have.text','Paste');
        */

        // Approach 2 using rightclick method
       cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
       cy.get('.context-menu-icon-paste > span').should('not.be.visible');
       cy.get('.context-menu-one').rightclick();
       cy.get('.context-menu-icon-paste > span').should('be.visible').should('have.text','Paste');
    

    })


    it('Mouse DoubleClick',()=>{
        /* Approach 1 using dblclick method
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
       */
        // Approach 2 using trigger method
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    })


    it('Mouse Drag and Drog using plugin',()=>{
       cy.visit('https://practice.expandtesting.com/drag-and-drop')
       cy.get('#column-a').drag('#column-b')
       cy.get('#column-b').should('contain','A')
       cy.get('#column-a').should('contain','B')
        
    })



    it.only('Mouse Scrolling Page ',()=>{
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get(':nth-child(123)').scrollIntoView({duration:3000});
        cy.get(':nth-child(123)').should('be.visible').should('contain','Nepal')
        //cy.wait(8000)
        cy.get('.row > :nth-child(7)').scrollIntoView({duration:5000});
        cy.get('.row > :nth-child(7)').should('be.visible').should('contain','Argentina')
        
         
    })
})
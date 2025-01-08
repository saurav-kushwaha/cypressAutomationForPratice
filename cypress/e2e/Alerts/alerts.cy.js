describe('JavaScript alerts',()=>{
    // javaScript simple alerts
    it('simple alerts',()=>{
        cy.visit('https://artoftesting.com/samplesiteforselenium#');
        cy.get('button[onclick="generateAlertBox()"]').click();
        

        cy.on('window:alert',(e)=>{
            expect(e).to.contains('Hi! Art Of Testing, Here!');
        })
        

        //cy.get('slector').should('have.text','expected text');

    })

    it('JavaScript confirm alter with OK',()=>{
        cy.visit('https://artoftesting.com/samplesiteforselenium#');
        cy.get('button[onclick="generateConfirmBox()"]').click();
        

        cy.on('window:confirm',(e)=>{
            expect(e).to.contains('Press a button!');
        })
        cy.get('#demo').should('have.text','You pressed OK!');
        
       // cy.get('#demo').should('be.visible').and('have.text','You pressed OK!');

    })


    it.skip('JavaScript confirm alter with Cancle',()=>{
        cy.visit('https://artoftesting.com/samplesiteforselenium#');
        cy.get('button[onclick="generateConfirmBox()"]').click();
        

        cy.on('window:confirm',(e)=>{
            expect(e).to.contains('Press a button!');
        })
        
        cy.on('window:confirm',(e)=>false);
        cy.get('#demo').should('have.text','You pressed Cancel!');
      

    })


    it.only('JavaScript Prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // cy.get('button[onclick="jsPrompt()"]').click();

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
            cy.get('button[onclick="jsPrompt()"]').click();
        })


       // use aaertion for validation
       cy.get('#result').should('have.text','You entered: welcome');

       // for cancle use below script
       //cy.on('window:confirm',(e)=>false);

    })


    it.skip('Auth',()=>{
        
        cy.visit('https://artoftesting.com/samplesiteforselenium#',{auth:{username:"admin",password:'admin'}});
        //cy.get('selector').should('have.contain','Congurations')
        
         // Another method
         // passing both username and password in url
          cy.visit('https://admin:admin@artoftesting.com/samplesiteforselenium#');
        // Validation method
        //cy.get('selector').should('have.contain','Message')
        
    })



})
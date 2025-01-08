describe("Assertions Demo",()=>{

    it('Implicit assertion',()=>{
// should nad and
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should('include','orangehrmlive.com')
    //     cy.url().should('eql','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.url().should('contain','opensource-demo');

        // cy.url().should('include','orangehrmlive.com')
        // .should('eql','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','opensource-demo');

        cy.url().should('include','orangehrmlive.com')
        .and('eql','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource-demo')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')// title of webpage
        .and('eql','OrangeHRM')
        .and('contain',"HRM")
        .and('not.include','hrm');

        cy.get('.orangehrm-login-branding > img').should('be.visible')// logo visible
        .and('exist')// logo exist

        cy.xpath('//a').should('have.length',5) // no of links


        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="username"]').should('have.value',"Admin")// input value correction


        cy.get('input[name="password"]').type("admin123")
        cy.get('input[name="password"]').should('have.value','admin123')// verifying password


        cy.get('button[type="submit"]').should('be.visible')// login
        //cy.get('button[type="submit"]').click()

    })

    it('Explicit assertion',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
         
        let expName = 'Abdul Soomro';
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text()

            // Bdd style

            expect(actName).to.equal(expName);
           // expect(actName).to.not.equal(expName);


            // TDD style
            assert.equal(actName,expName)
           // assert.notEqual(actName,expName)
        })
        

              
        
                
        
    })
})
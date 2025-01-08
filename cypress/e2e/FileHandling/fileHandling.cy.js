describe('File Upload Handling using plugin',()=>{
    it('Single file Upload ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('sanjeev resume.pdf')
        cy.get('#file-submit').click();
        cy.wait(8000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
        
    })

    it('File Upload - Rename',()=>{
        // to edit the file name use filePath and Filename 
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'sanjeev resume.pdf',fileName:'myFile.pdf'})
        cy.get('#file-submit').click();
        cy.wait(8000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
        
    })


    it('File Upload Drag and Drop ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('sanjeev resume.pdf',{ subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('sanjeev resume.pdf')
    })


    it('Multiple File Upload',()=>{
        // to edit the file name use filePath and Filename 
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['sanjeev resume.pdf','web pdf.pdf'])
        cy.wait(8000)
        cy.get(':nth-child(6) > strong').contains('Files You Selected:')
        
    })


    it.only('File Upload - Shadow Dom',()=>{
        // to edit the file name use filePath and Filename 
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/')
        cy.frameLoaded(".demo-frame")
        cy.iframe('.demo-frame')
        .find('.smart-ui-component')
        .shadow()
        .find('.smart-browse-input')
        .attachFile('web pdf.pdf')
        cy.wait(8000)
        cy.frameLoaded(".demo-frame")
        cy.iframe('.demo-frame')
        .find('.smart-ui-component')
        .shadow()
        .find('.smart-item-name').contains('web pdf.pdf')


       
        
    })

})
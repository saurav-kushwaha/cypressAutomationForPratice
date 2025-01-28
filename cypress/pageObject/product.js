class productPage{
    
    checkoutBtn='#navbarResponsive > .navbar-nav > .nav-item > .nav-link';
    checkoutBtn2='.btn.btn-success';
    locationInput='.input-field.col.s12>input#country';
    checkbox='.checkbox';
    purchaseBtn='.ng-untouched > .btn';
    suggestion='.suggestions > ul > li > a';
    successMessage='.alert';





    getClickOnCheckOutButton(){
        return cy.get(this.checkoutBtn)
    }
    getClickOnCheckOutButton2(){
        return cy.get(this.checkoutBtn2)
    }
    getLocationInput(){
        return cy.get(this.locationInput)
    }
    getCheckBox(){
        return cy.get(this.checkbox)
    }
    getClickOnPurchaseBtn(){
        return cy.get(this.purchaseBtn)
    }
    getClickOnSuggestion(){
        return cy.get(this.suggestion)
    }
    getSuccessMessage(){
        return cy.get(this.successMessage)
    }




}
export default productPage;
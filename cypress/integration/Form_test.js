describe('name input', function (){
    it('Will grab the name input and type a name into the text box', function(){
        cy.visit('http://localhost:3000/pizza')
        .get('input[name = "name"]').type('Steven Homem').should('have.value', 'Steven Homem')
    })
});

describe('Submit the order', function(){
    it('Check if we can submit the form', function(){
        cy.visit('http://localhost:3000/pizza')
        .get('#pizza-form')
        .submit()
    })
})

describe('checky check', function (){
    it('Will see if the user can check, uncheck, and check again the agree to terms checkbox', function(){
        cy.visit('http://localhost:3000/pizza')
        .get('[type = "checkbox"]').check().uncheck().check()
    })
});


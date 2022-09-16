describe(' env vai', function(){

    it('env access', function(){

        let env=Cypress.env('qa')

        cy.log(env)
    })
})
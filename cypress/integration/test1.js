describe('Test', function(){

    before('sabse pehle', function(){

        cy.log('before')
    })

    it('Test sample', function(){

        //cy.log('ehllo world')

        cy.fixture('example').then(function(data){

            cy.log(data.name)
        })
    })

    after('after', function(){

        cy.log('after')
    })
})
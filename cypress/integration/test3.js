describe('assertion', function(){

    it('verify assertion for ur', function(){

       cy.visit('https://the-internet.herokuapp.com/dropdown')

       cy.get('#dropdown').children().then(function(val){

        cy.log(val.text())
       })
       })

    //    cy.get('h1').then(function(header){

    //     cy.log(header.text())

    //     expect(header.text()).contain('Welcome to the-internet')
    //    })
    })

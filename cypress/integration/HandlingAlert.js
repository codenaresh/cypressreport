describe('handling alert', function(){

    it('handling alert', function(){


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.contains('Click for JS Alert').click()

        cy.on('window:alert', function(alertText){

            expect(alertText).to.eq('I am a JS Alert')
        })

       
    })
})
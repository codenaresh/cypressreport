describe('hadling table', function(){


    it('handling table', function(){

        cy.visit('https://the-internet.herokuapp.com/tables')

        // get complete data

        cy.get('#table1>tbody>tr').each(function($row, index, $rowlist){

            cy.wrap($row).within(function(){

                cy.get('td').each(function($celldata, index,$colums){

                    cy.log($celldata.text())
                })
            })
        })
    })

    it.only('single row data', function(){

        cy.visit('https://the-internet.herokuapp.com/tables')

        cy.get('#table1>tbody>tr').first().each(function($row, list, $list){

            cy.wrap($row).within(function(){

                cy.get('td').each(function($celldata, index,$colums){

                    cy.log($celldata.text())
                })
            })
        })





    })
})
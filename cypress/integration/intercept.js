describe('intercept the api', function(){


    it('test intercept api', function(){


        cy.visit('https://jsonplaceholder.typicode.com')

        cy.intercept({

            path:'/posts'


        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()

        cy.wait('@posts').then(function(inter){

            cy.log(JSON.stringify(inter))
        })
    })

    it('mocking with intercepting', function(){

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.intercept('GET','/posts',{totalPost:5,'name':'naresh','age':'5'}).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()

        cy.wait('@posts')
    })

    it.only('mocking resp[onse form fixture', function(){

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.intercept('GET','/posts',{fixture:'createUser.json'}).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()

         cy.wait('@posts')

    })
})
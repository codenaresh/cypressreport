describe('post api', function () {

    it('post api automation', function () {

        cy.request({

            method: 'POST',

            url: 'https://reqres.in/api/users',

            body: {

                "name": "naresh",
                "job": "qa"
            }
        }).then(function(res){

            expect(res.status).to.eq(201)

            cy.log(JSON.stringify(res))
        })
    })
})
describe('api test', function(){

it('api testing', function(){

    cy.request({

        method:'GET',
        url:'https://reqres.in/api/users?page=2',

    }).then(function(res){

        expect(res.status).to.eq(200)
        expect(res.body.total).to.eq(12)
    })
})


})
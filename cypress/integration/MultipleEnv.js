
import {utility} from '../support/utility'

const url= new utility().getBaseUrl()
describe('Run with multiple env', function(){

    it('run with multiple env', function(){

       // let url=Cypress.config().baseUrl

        cy.visit(url)
       
    })
})
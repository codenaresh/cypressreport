export class utility{

    getBaseUrl(){

        let envi=Cypress.env('ENV')

        if(envi=='production'){

            return "https://www.google.com"
        }

        else if(envi=='staging'){

            return "https://www.javatpoint.com"
        }

        else if(envi=='qa'){

            return "https://www.toolsqa.com/testng/testng-tutorial/"
        }


    }



}
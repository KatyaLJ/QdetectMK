
export class AddClient {

    addClients(firstname, lastname, lastName, email, email2, company) {
            
        cy.get('.mt-4 > .block').contains("Nuevo cliente").click()
        cy.get('#type').should('be.visible').select(Math.floor((Math.random() * 3) + 1), { force: true }).should('be.visible')
        
        cy.get('#contact_name').should('be.visible').type(firstname)
        cy.get('#contact_last_name').should('be.visible').type(lastname)
        cy.get('#contact_second_last_name').should('be.visible').type(lastName)
        cy.get('#email').should('be.visible').type(email)
        cy.get('#email_confirmation').should('be.visible').type(email2)
        cy.get('#legal_name').should('be.visible').type(company)
        cy.get("[type='submit']").should('be.visible').click({force: true})
        cy.get('.bg-green-500').should('be.visible')
        cy.get('.divide-y > :nth-child(1) > .pl-4').should("exist")
        cy.get('.ml-4').first().should("exist")
        cy.get('.text-gray-900').eq(6).should("exist")
        cy.log("Contact Added Succcesfully")
        
        }
    }
    
export const onAddClient = new AddClient()
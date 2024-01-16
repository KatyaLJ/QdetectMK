
export class AddClient {

    addClients(firstname, lastname, lastName, email, email2, company) {
            
        cy.get('.mt-4 > .block').contains("Nuevo cliente").click()
        cy.get('#type').should('be.visible').select(Math.floor((Math.random() * 3) + 1), { force: true }).should('be.visible')
        
        cy.get('#contact_name').should('be.visible').type(firstname)
   
        cy.get('#contact_last_name').should('be.visible').type(lastname)
        //cy.wait(t)
        cy.get('#contact_second_last_name').should('be.visible').type(lastName)
        //cy.wait(t)
        cy.get('#email').should('be.visible').type(email)
        //cy.wait(t)
        cy.get('#email_confirmation').should('be.visible').type(email2)
        cy.get('#legal_name').should('be.visible').type(company)
        //cy.wait(t)
        /* cy.get('#country').should('be.visible').select(country).should("have.value", country)
        cy.wait(t) */
       /*  cy.get("[type='submit']").should('be.visible').click({force: true})
        cy.get('.bg-green-500').should('be.visible')
        cy.get('.divide-y > :nth-child(1) > .pl-4').should("exist")
        cy.get('.ml-4').first().should("exist")
        cy.get('.text-gray-900').eq(6).should("exist")
        cy.log("Contact Added Succcesfully") */
        
        }
    }
   /*  ['apples', 'bananas'])
  .invoke('val')
  .should('deep.equal', ['456', '458']) */
export const onAddClient = new AddClient()


/* (name, email, otherInfo) => {
    // Lógica para interactuar con el formulario de registro
    cy.visit('/registro'); // Ajusta la URL según tu aplicación
    cy.get('#nombre').type(name);
    cy.get('#email').type(email);
    // Completa la lógica para otros campos si es necesario
  
    // Envía el formulario
    cy.get('form').submit();

    
    (type, contact, last, last2, email1, email2, legal, country,t) => { 
    let time = t
    
 }*/
  
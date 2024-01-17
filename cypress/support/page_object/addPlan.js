export class AddPlan {

    addPlans(username, email, email2, firstname, lastname, lastName) {

        cy.get('.divide-y > :nth-child(1) > .relative').then( container =>{
            cy.wrap(container).contains('Planes').should("contain", "Planes").click()
        })
        cy.get('.mt-4 > .block').should("be.visible").click()
        cy.get("[type='text']").first().should("be.visible").type(username)
        cy.get('#email').should('be.visible').type(email)
        cy.get('#email_confirmation').should('be.visible').type(email2)
        cy.get('#name').should('be.visible').type(firstname)
        cy.get('#last_name').should('be.visible').type(lastname)
        cy.get('#second_last_name').should('be.visible').type(lastName)
        cy.get("[class='mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm']")
        .last().should('be.visible').select("2").should("have.value", "2")
       
        cy.get('#daily_limit').should('be.checked')
          for(let x=1;x<=5;x++){
        cy.get("[type='checkbox']").eq(x).should('be.checked')}
        cy.get("[type='checkbox']").eq(6).should('not.be.checked')
          for(let j=7;j<=59;j++){
        cy.get("[type='checkbox']").eq(j).should('be.checked')}
        cy.get("[type='submit']").first().should("contain", "Guardar").click()
        /* cy.get("[class='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out']")
        .then( navbar =>{
            cy.wrap(navbar).contains('Clientes').should("contain", "Clientes").click() 
        }
        
        )*/
      }
    }
    
export const onAddPlan = new AddPlan ()
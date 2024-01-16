export class AddPlan {

    addPlans(name2) {
        
        cy.get('.divide-y > :nth-child(1) > .relative')
        cy.get('[href="https://main.q-detect.com/clients/54/plans?page=1"]').click({force: true})
        cy.get('.mt-4 > .block').should("be.visible").click({force: true})
    /*     cy.get("[type='text']").first().should("be.visible").type(name2,email5,namex,lastx,slastx)
        cy.get('#email').should('be.visible').type(email5)
        cy.get('#email_confirmation').should('be.visible').type(email5)
            cy.wait(time)
            cy.get('#name').should('be.visible').type(namex)
            cy.wait(time)
            cy.get('#last_name').should('be.visible').type(lastx)
            cy.wait(time)  
            cy.get('#second_last_name').should('be.visible').type(slastx)
            cy.wait(time)
            cy.get("[class='mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm']").last().should('be.visible').select("2").should("have.value", "2")
            cy.get('#daily_limit').should('be.checked')
            for(let x=1;x<=5;x++){
              cy.get("[type='checkbox']").eq(x).should('be.checked')
            }
            cy.get("[type='checkbox']").eq(6).should('not.be.checked')
            for(let j=7;j<=59;j++){
              cy.get("[type='checkbox']").eq(j).should('be.checked')
            }
            cy.get("[type='submit']").first().should("contain", "Guardar")
            cy.get('.ml-4').first().should("contain", name2)
            cy.get('.text-gray-900').eq(6).should("contain", 1) */
        }
    }
    
export const onAddPlan = new AddPlan ()
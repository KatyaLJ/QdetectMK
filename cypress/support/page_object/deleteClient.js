//buscar link clientes, click
//buscar link editar, click
//buscar boton eliminar
// modal eliminar

export class DeleteClient {
deleteClient(){
    cy.get('.divide-y > :nth-child(1) > .relative').then( container =>{
        cy.wrap(container).contains('Editar').should("contain", "Editar").click()
    })
   cy.get("[class='border-red-600 border-2 py-1 px-3 rounded-lg text-red-600 bg-white-100 hover:text-white hover:bg-red-600 flex flex-row ']").contains("Eliminar").click({force: true})
   cy.get("[type='button']").contains("Eliminar").click({force: true})
    cy.get("[class='w-0 flex-1 flex items-center min-w-0']").contains("Cuenta eliminada correctamente.")
    cy.log("Cuenta eliminada correctamente")
} 
}
export const onDeleteClient = new DeleteClient()
export class LoginPage {

    login(username, password){
        cy.get('form').then( form =>{
            cy.wrap(form).find('#username').should('be.visible').type(username)
            cy.wrap(form).find('#password').should('be.visible').type(password)
            cy.wrap(form).find('.inline-flex').should('exist').click({force: true})
        
        })
    }
}
export const onLoginPage = new LoginPage()
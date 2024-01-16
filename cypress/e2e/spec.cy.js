const { onLoginPage } = require('../support/page_object/logIn');
const { onAddClient } = require('../support/page_object/addClient');

const dataLogin = require ('../e2e/data.json');
//const testData = cy.fixture('../fixtures/testData.json').as('testData')
/* let firstname = clients.name;
const lastname = clients.lastname;
const lastName = clients.lastName;
const email = clients.email
const email2 = clients.email
const company = clients.company */


describe('Test with Page Objects', ( ) =>{
  let testData = require('../fixtures/testData.json')
  beforeEach('Open application', () => {
    cy.fixture('testData').then((data2) => {
        testData = data2;
      });
  cy.clearCookies()
  cy.clearLocalStorage();
  cy.openHomePage()
  })

  it('Sign In', () =>{
       
    onLoginPage.login(dataLogin.username, dataLogin.password)

    testData.forEach((data) => {
      const constName = data.name;
      const constlastname = data.lastname;
      const constlastName = data.lastName;
      const constEmail = data.email;
      const constEmail2 = data.email;
      const constCompany = data.company;

      // Realizar acciones con los datos
      onAddClient.addClients(constName, constlastname, constlastName, constEmail2, constEmail, constCompany);
    });
  });
    //onAddClient.addClients(constName, lastname, lastName, email, email2, company, 2000)


  } )
  
/*  it('Add Client', () =>{
         
  
  
}) */

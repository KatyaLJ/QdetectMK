const { onLoginPage } = require('../support/page_object/logIn');
const { onAddClient } = require('../support/page_object/addClient');

const dataLogin = require ('../e2e/data.json'); //datos del json para login
const { onAddPlan } = require('../support/page_object/addPlan');



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

  it('Log In & New Clients', () =>{
       
    onLoginPage.login(dataLogin.username, dataLogin.password)
    
      testData.forEach((data) => {
      const constName = data.name;
      const constlastname = data.lastname;
      const constlastName = data.lastName;
      const constEmail = data.email;
      const constEmail2 = data.email;
      const constCompany = "WATRO";
      const username = (constlastname+constCompany+'1')

    onAddClient.addClients(constName, constlastname, constlastName, constEmail2, constEmail, constCompany);
    onAddPlan.addPlans(username, constEmail, constEmail2, constName, constlastname, constlastName)
    });
  });



  } )
  
/*  it('Add Client', () =>{
         
  
  
}) */

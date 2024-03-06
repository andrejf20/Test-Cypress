const endPoint = 'https://api.demoblaze.com/signup';

const userObject = {
  "username": "Devsu_User",
  "password": "123456789"
}

const addUser = userObject => {

  cy.request('POST', endPoint, userObject)
}

 describe ('API test', () => {
 it('Create User', () =>{
  addUser(userObject)
  cy.request('POST','https://api.demoblaze.com/signup', {failOnStatusCode: false})
  cy.request('POST',endPoint,userObject)
  .its('status')
  .should('eq',200)
 });


 });
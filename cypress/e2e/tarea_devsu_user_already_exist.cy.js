const endPoint = 'https://api.demoblaze.com/signup';

const userObject = {
  "username": "Devsu16",
  "password": "12345678"
}

const addUser = userObject => {

  cy.request('POST', endPoint, userObject)
}

 describe ('API test', () => {
 it('Create User', () =>{
  addUser(userObject)
  cy.request('POST','https://api.demoblaze.com/signup', {failOnStatusCode: false})
  cy.request('POST',endPoint,userObject)
  .its('body')
  .should('deep.equal',{errorMessage: 'This user already exist.'})
 });


 });
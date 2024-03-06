const endPoint = 'https://api.demoblaze.com/login';

const userObject = {
  "username": "Devsu_User",
  "password": "MTIz1666"
}

const loginUser = userObject => {

  cy.request('POST', endPoint, userObject)
}

 describe ('API test Login', () => {
 it('Login User', () =>{
    loginUser(userObject)
    cy.request('POST','https://api.demoblaze.com/signup', {failOnStatusCode: false})
    cy.request('POST',endPoint,userObject)
    .its('body')
    .should('deep.equal',{errorMessage: 'Wrong password.'})

 });


 });
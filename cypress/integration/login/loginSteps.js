// import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

// Given('I am at login page', ()=>{
//   cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
//   cy.url().should("contain", "saucedemo");
//   cy.title().should('eq','Swag Labs')
//   cy.window().then((win) => {
//     win.sessionStorage.clear();
//   });
// })

// When('I input username and password', ()=>{
//   cy.get("#user-name").clear().type('standard_user');
//   cy.get("#password").clear().type('secret_sauce');
// })

// When('Click the submit button', ()=>{
//   cy.get('input[type="submit"]').should("be.visible").click();
// })

// Then('I should be able to load main page successfully', ()=>{
//   cy.contains('ADD TO CART').should('be.visible')
// })
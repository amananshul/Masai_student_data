/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe("Input testing function",function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/")
    })
    it("should render",function(){
     cy.get(".input").should("exist");
    });
    it("input should be focsed",function(){
        cy.get(".input").should("have.focus")
    })
    it("should type text",function(){
       cy.get(".input").type("Automated test")
        cy.get(".input").should("have.value","Automated test");
    })
})
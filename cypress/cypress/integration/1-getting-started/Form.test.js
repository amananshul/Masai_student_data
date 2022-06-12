/* eslint-disable no-undef */
/// <reference types="cypress" />

const data = [
    {
        id:1,
        name:"Aman",
        age:24
    },
    {
        id:2,
        name:"Anshul",
        age:23
    }
]

describe("form basic testing",function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })
    it("should render without crash",function(){       
        cy.get(".form").should("exist")
    });

    it("should get data on first render",function(){
        cy.intercept("GET","http://localhost:8080/form",data);
    })

    it("should type add something to list",function(){
        const text = {name:"ranbir roy",age:12}
        cy.intercept("POST","http://localhost:8080/form",text)
        cy.get(".input-name").type("ranbir roy");
        cy.get(".input-age").type("5");
        cy.get(".submit-btn").click();
        cy.get(".items").should("have.length",4)
    })

    it("should get error",function(){
        cy.intercept("POST","http://localhost:8080/form", {
            statusCode: 500,
            body: {
              name: 'rajendra',
              age: 14
            },
          }).as("formReq");
          cy.get(".input-name").type("rajendra");
        cy.get(".input-age").type("30");
        cy.get(".submit-btn").click();

        cy.get(".error").should("be.visible")
    })
})
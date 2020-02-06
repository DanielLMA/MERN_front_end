let fixtures = {};

beforeEach (() => {
    cy.viewport(2732, 2048);
    cy.visit("/login");
    cy.contains("Login").click();
    cy.fixture("loginuser.json").then((user) => {
        fixtures.loginuser = user;
    })
})

describe("Test login", () => {
    it("Should login user", () => {
        cy.url().should("include", "/login")
    });
})

it("Can login", () => {
    cy.contains("Login").click();
    cy.get("[data-cy=email]").type(fixtures.loginuser.email)
    cy.get("[data-cy=password]").type(fixtures.loginuser.password)
    cy.get("[data-cy=submit]").click();
})
beforeEach (() => {
    cy.viewport(2732, 2048);
    cy.visit("/gallery");
    cy.contains("Gallery").click();
    // cy.contans("[data-cy=submit]").click();
})

describe("Test button", () => {
    it("Should click on buton", () => {
        cy.get('[data-cy=submit]').click();
    })
})

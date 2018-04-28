import faker from 'faker';

describe('Test on initial page', () => {
    beforeEach(() => {
        cy.visit('http://0.0.0.0:9000');
    });

    it('Access the page', () => {
        cy.contains('Upnid - Credit Cards')
        cy.contains('Go to List')
        cy.get('.button')
            .should('have.attr', 'href', '/list')
    });

    it('Create a new credit card', () => {
        const name = 'GUILHERME P C LOURO'
        cy.get('input[placeholder="NUMBER"]')
            .type('9999999999999999')
            .should('have.value', '9999 9999 9999 9999')

        cy.get('input[placeholder="FULL NAME"]')
            .type(name)
            .should('have.value', name)

        cy.get('input[placeholder="MM/YY"]')
            .type('0622')
            .should('have.value', '06/22')

        cy.get('input[placeholder="CVV"]')
            .type('543')
            .should('have.value', '543')

        cy.get('button')
            .should('have.text', 'SAVE')
            .click()

        cy.url().should('include', '/list')

        cy.contains(name)
    });

    it('Access list page by home', () => {
        cy.get('a.button')
            .click()

        cy.url().should('include', '/list')
    })
});

describe('Test on list page', () => {
    beforeEach(() => {
        cy.visit('http://0.0.0.0:9000/list')
    });

    it('Access the page', () => {
        cy.contains('Upnid - Credit Cards')
        cy.contains('Create new')
        cy.get('.button')
            .should('have.attr', 'href', '/')
    });

    it('Delete data', () => {
        cy.contains('GUILHERME P C LOURO')
            .parent()
            .find('.delete')
            .click()
    });

    it('Update data', () => {
        const id = "7f8b9936-4a28-11e8-842f-0ed5f89f718b";
        cy.get(`a[href="/edit/${id}"]`)
            .parent()
            .find('.edit')
            .click()

        cy.url()
            .should('include', `/edit/${id}`)

        cy.get('input[placeholder="FULL NAME"]')
            .clear()
            .type(faker.name.findName())

        cy.get('button')
            .click()

        cy.url().should('include', '/list')
    });
});

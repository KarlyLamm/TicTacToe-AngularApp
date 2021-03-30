describe('TicTacToe Game board', () => {
    it('begins a fresh new game', () => {
        cy.visit('http://localhost:60229/');

        cy.contains('Current Player:')

        cy.getByTestId('start-game').click();
        cy.getByTestId('player').click({ multiple: true }).then().contains('won the game');
    })
})
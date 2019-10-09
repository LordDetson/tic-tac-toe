class TicTacToe {
    constructor() {
        this.symbols = ["x", "o"];
        this.currentPlayer = 0;
        this.field = [];
        for (let i = 0; i < 3; i++) {
            this.field[i] = [];
            for (let j = 0; j < 3; j++) {
                this.field[i][j] = null;
            }
        }
        this.winner = null;
    }

    changeCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }

    getCurrentPlayerSymbol() {
        return this.symbols[this.currentPlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (this.checkWinner()) {
                this.winner = this.getCurrentPlayerSymbol();
            }
            this.changeCurrentPlayer();
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    checkWinner() {
        return (this.field[0][0] === this.getCurrentPlayerSymbol() &&
            this.field[0][1] === this.getCurrentPlayerSymbol() &&
            this.field[0][2] === this.getCurrentPlayerSymbol()) ||
            (this.field[1][0] === this.getCurrentPlayerSymbol() &&
                this.field[1][1] === this.getCurrentPlayerSymbol() &&
                this.field[1][2] === this.getCurrentPlayerSymbol()) ||
            (this.field[2][0] === this.getCurrentPlayerSymbol() &&
                this.field[2][1] === this.getCurrentPlayerSymbol() &&
                this.field[2][2] === this.getCurrentPlayerSymbol()) ||
            (this.field[0][0] === this.getCurrentPlayerSymbol() &&
                this.field[1][0] === this.getCurrentPlayerSymbol() &&
                this.field[2][0] === this.getCurrentPlayerSymbol()) ||
            (this.field[0][1] === this.getCurrentPlayerSymbol() &&
                this.field[1][1] === this.getCurrentPlayerSymbol() &&
                this.field[2][1] === this.getCurrentPlayerSymbol()) ||
            (this.field[0][2] === this.getCurrentPlayerSymbol() &&
                this.field[1][2] === this.getCurrentPlayerSymbol() &&
                this.field[2][2] === this.getCurrentPlayerSymbol()) ||
            (this.field[0][0] === this.getCurrentPlayerSymbol() &&
                this.field[1][1] === this.getCurrentPlayerSymbol() &&
                this.field[2][2] === this.getCurrentPlayerSymbol()) ||
            (this.field[0][2] === this.getCurrentPlayerSymbol() &&
                this.field[1][1] === this.getCurrentPlayerSymbol() &&
                this.field[2][0] === this.getCurrentPlayerSymbol());
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

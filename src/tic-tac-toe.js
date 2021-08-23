class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null],
        [null, null, null],
        [null, null, null]];
        this.currentSimbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentSimbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentSimbol =this.currentSimbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        switch (true) {
            case (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]): return this.matrix[0][0];
            case (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2]): return this.matrix[1][0];
            case (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2]): return this.matrix[2][0];
            case (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0]): return this.matrix[0][0];
            case (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1]): return this.matrix[0][1];
            case (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2]): return this.matrix[0][2];
            case (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]): return this.matrix[0][2];
            case (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]): return this.matrix[0][0];
            default: return null;
        }
    }

    noMoreTurns() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === null) return false;
            }
        }
        return true
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;

const gameBoard = (() => {
    const squareArr = [];
    const winContainer = document.getElementById('win-container');
    const overlay = document.getElementById('overlay');

    const buildBoard = () => {
        for (let i = 0; i < 9; i++) {
            let num = i.toString();
            let square = document.getElementById(num);
            squareArr.push(document.getElementById(num));
            square.onclick = () => gameTracker.addMarks(square.id);
        }
        console.log(squareArr);
    }

    const resetBoard = () => {
        winContainer.classList.remove('active');
        overlay.classList.remove('active');

        for(let i = 0; i < 9; i++){
            let num = i.toString();
            let square = document.getElementById(num);
            
            while(square.firstChild) {
                square.removeChild(square.lastChild);
            }
        }
    }

    return {
        buildBoard,
        squareArr,
        resetBoard
    };
})();

const gameTracker = (() => {
    let turnCount = 1;
    const winContainer = document.getElementById('win-container');
    const winText = document.getElementById('win-text');
    const overlay = document.getElementById('overlay');

    const addMarks = (index) => {
        let square = document.getElementById(index);

        if(turnCount % 2 == 0){
            let mark = document.createElement('h3');
            mark.classList.add('o');
            mark.innerHTML = 'O';
            square.appendChild(mark);
        } else {
            let mark = document.createElement('h3');
            mark.classList.add('x');
            mark.innerHTML = 'X';
            square.appendChild(mark);
        }

        doTurn();
    }

    const doTurn = () => {
        if(turnCount >= 5) {
            checkWin();
        }

        turnCount++;
        console.log(turnCount);
    }

    const checkWin = () => {
        let marksArr = [];
        for(let i = 0; i < 9; i++) {
            let square = gameBoard.squareArr[i];
            let squareMark = square.firstElementChild;

            if (squareMark == null){
                marksArr.push('null');
            } else {
                marksArr.push(squareMark.innerHTML);
            }
        }

        if (marksArr[0] == marksArr[1] && marksArr[1] == marksArr[2] && marksArr[2] != 'null') {
            console.log(`The winner is ${marksArr[1]}`);
            showWin(marksArr[1]);
        } else if (marksArr[3] == marksArr[4] && marksArr[4] == marksArr[5] && marksArr[5] != 'null') {
            console.log(`The winner is ${marksArr[4]}`);
            showWin(marksArr[4]);
        } else if (marksArr[6] == marksArr[7] && marksArr[7] == marksArr[8] && marksArr[8] != 'null') {
            console.log(`The winner is ${marksArr[7]}`);
            showWin(marksArr[7]);
        } else if (marksArr[0] == marksArr[3] && marksArr[3] == marksArr[6] && marksArr[6] != 'null') {
            console.log(`The winner is ${marksArr[3]}`);
            showWin(marksArr[3]);
        } else if (marksArr[1] == marksArr[4] && marksArr[4] == marksArr[7] && marksArr[7] != 'null') {
            console.log(`The winner is ${marksArr[4]}`);
            showWin(marksArr[4]);
        } else if (marksArr[2] == marksArr[5] && marksArr[5] == marksArr[8] && marksArr[8] != 'null') {
            console.log(`The winner is ${marksArr[5]}`);
            showWin(marksArr[5]);
        } else if (marksArr[0] == marksArr[4] && marksArr[4] == marksArr[8] && marksArr[8] != 'null') {
            console.log(`The winner is ${marksArr[4]}`);
            showWin(marksArr[4]);
        } else if (marksArr[2] == marksArr[4] && marksArr[4] == marksArr[6] && marksArr[6] != 'null') {
            console.log(`The winner is ${marksArr[4]}`);
            showWin(marksArr[4]);
        } else if (turnCount == 9) {
            console.log("It's a tie!");
            showTie();
        }
    }

    const showWin = (winner) => {
        winText.innerHTML = `The winner is ${winner}!`;
        winContainer.classList.add('active');
        overlay.classList.add('active');

        if (winner == 'X') {
            scoreBoard.addXWin();
        } else if (winner == 'O') {
            scoreBoard.addOWin();
        }
    }

    const showTie = () => {
        winText.innerHTML = "It's a tie!";
        winContainer.classList.add('active');
        overlay.classList.add('active');
    }

    const gameReset = () => {
        gameBoard.resetBoard();
        turnCount = 1;
    }

    overlay.onclick = gameReset;
    
    return {
        addMarks,
        turnCount
    }
})();

const scoreBoard = (() => {
    const xScore = document.getElementById('x-score');
    const oScore = document.getElementById('o-score');

    const addXWin = () => {
        let num = Number(xScore.innerHTML);
        num++;
        xScore.innerHTML = num.toString();
    }

    const addOWin = () => {
        let num = Number(oScore.innerHTML);
        num++;
        oScore.innerHTML = num.toString();
    }

    const reset = () => {
        oScore.innerHTML = '0';
        xScore.innerHTML = '0';
    }

    return {
        addXWin,
        addOWin,
        reset
    }
})();

const buttonManager = (() => {
    const resetBoardBtn = document.getElementById('reset-board');
    const resetScoreBtn = document.getElementById('reset-score');
    const resetBothBtn = document.getElementById('reset-both');

    resetScoreBtn.onclick = scoreBoard.reset;
})();

gameBoard.buildBoard();
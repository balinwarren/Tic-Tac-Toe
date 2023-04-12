const gameBoard = (() => {
    const squareArr = [];

    const buildBoard = () => {
        for (let i = 0; i < 9; i++) {
            let num = i.toString();
            let square = document.getElementById(num);
            squareArr.push(document.getElementById(num));
            square.onclick = () => gameTracker.addMarks(square.id);
        }
        console.log(squareArr);
    }

    return {
        buildBoard,
        squareArr
    };
})();

const gameTracker = (() => {
    let turnCount = 1;

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
        if(turnCount >= 6) {
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

        if (marksArr[0] == marksArr[1] && marksArr[1] == marksArr[2]) {
            console.log(`The winner is ${marksArr[0]}`);
        } else if (marksArr[3] == marksArr[4] && marksArr[4] == marksArr[5]) {
            console.log(`The winner is ${marksArr[3]}`);
        } else if (marksArr[6] == marksArr[7] && marksArr[7] == marksArr[8]) {
            console.log(`The winner is ${marksArr[6]}`);
        } else if (marksArr[0] == marksArr[3] && marksArr[3] == marksArr[6]) {
            console.log(`The winner is ${marksArr[0]}`);
        } else if (marksArr[1] == marksArr[4] && marksArr[4] == marksArr[7]) {
            console.log(`The winner is ${marksArr[1]}`);
        } else if (marksArr[2] == marksArr[5] && marksArr[5] == marksArr[8]) {
            console.log(`The winner is ${marksArr[2]}`);
        } else if (marksArr[0] == marksArr[4] && marksArr[4] == marksArr[8]) {
            console.log(`The winner is ${marksArr[0]}`);
        } else if (marksArr[2] == marksArr[4] && marksArr[4] == marksArr[6]) {
            console.log(`The winner is ${marksArr[2]}`);
        } else if (turnCount == 9) {
            console.log("It's a tie!")
        }
    }

    return {
        addMarks,
    }
})();

gameBoard.buildBoard();
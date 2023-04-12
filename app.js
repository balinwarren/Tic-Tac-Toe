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
        buildBoard
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

        doTurn(turnCount);
    }

    const doTurn = () => {
        turnCount++;
        console.log(turnCount);
    }

    return {
        addMarks
    }
})();
gameBoard.buildBoard();
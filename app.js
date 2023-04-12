const gameBoard = (() => {
    const squareArr = [];

    const buildBoard = () => {
        for (let i = 0; i < 9; i++) {
            let num = i.toString();
            let square = document.getElementById(num);
            squareArr.push(square);
        }
    }
    
    return {
        buildBoard
    };
})();
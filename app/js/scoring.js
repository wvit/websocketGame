//判定是否得分
function judgeScore() {
    for (let i = 0; i < gameDivs.length; i++) {
        for (let j = 0; j < gameDivs[i].length; j++) {
            if (j === gameDivs[i].length - 1 && gameDivs[i][j].className != 'none') {
                repaint(i)
            }
        }
    }
}

//判断哪行已经铺满
// function judgeRow(rowIndex) {
//     for (let i = 0; i < gameDivs[rowIndex].length; i++) {
//         if (gameDivs[rowIndex][i].className === 'none') {
//             return false;
//         }
//         if (i === gameDivs[rowIndex].length - 1) {
//             return true;
//         }
//     }
// }

//消除占满的那行，并且上面的方块下落
function repaint(rowIndex) {
    for (let i = 0; i < gameDivs[rowIndex].length; i++) {
        gameDivs[rowIndex][i].className = 'none'
    }
    gameData.splice(rowIndex, 1);
    gameData.unshift(rowNull);
    drawing(gameData, gameDivs);
}
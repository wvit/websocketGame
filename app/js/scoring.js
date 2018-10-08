//判定是否得分
function judgeScore() {
    let scoresNum = 0;
    for (let i = 0; i < gameDivs.length; i++) {
        if (!judgeRow(i)) {
            repaint(i)
            scoresNum++
        }
    }
    scores.innerHTML = Number(scores.innerHTML) + Math.pow(scoresNum, 2);
}

//判断哪行已经铺满
function judgeRow(rowIndex) {
    for (let i = 0; i < gameDivs[rowIndex].length; i++) {
        if (gameDivs[rowIndex][i].className === 'none') {
            return true;
        }
    }
}

//消除占满的那行并且方块下落
function repaint(rowIndex) {
    for (let i = 0; i < gameDivs[rowIndex].length; i++) {
        gameDivs[rowIndex][i].className = 'none'
    }
    clearGame();
    gameData.splice(rowIndex, 1);
    gameData.unshift(rowNull);
    drawing(gameData, gameDivs);
}
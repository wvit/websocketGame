//判断是否在游戏区范围内(主要用来判断是否可以进行下一步操作)
function judgeRange(posiX, posiY, arr = nextData) {
    for (let i = posiX; i < arr.length + posiX; i++) {
        for (let j = posiY; j < arr[0].length + posiY; j++) {
            if (arr[j - posiY][i - posiX] === 2) {
                if (!gameDivs[j] || !gameDivs[j][i]) {
                    return true;
                }
                if (gameDivs[j][i].className === 'done') {
                    return true;
                }
            }
        }
    }
}

//方块自由下落
function beginGame() {
    clearInterval(downTimer);
    downTimer = setInterval(() => {
        if (!judgeRange(userOneX, userOneY)) {
            gameMove(userOneX, userOneY++);
        }
        if (judgeRange(userOneX, userOneY)) {
            downFinish();
            clearInterval(downTimer);
        }
    }, 200)
}


//下落完成,方块变色和刷新方块
function downFinish() {
    for (let i = 0; i < gameDivs.length; i++) {
        for (let j = 0; j < gameDivs[0].length; j++) {
            if (gameDivs[i][j].className === 'current') {
                gameDivs[i][j].className = 'done';
            }
        }
    }
    userOneX = randomNum(gameData[0].length);
    userOneY = 0;
    judgeScore();
    createBlock.resetTypeIndex();
    createBlock.selectType();
}
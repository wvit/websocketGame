//判定是否得分

function judgeScore() {
    let removeRow = []
    for (let i = 0; i < gameDivs.length; i++) {
        for (let j = 0; j < gameDivs[i].length; j++) {
            if (j === gameDivs[i].length - 1 && gameDivs[i][j].className != 'none') {
                removeRow.push(i);
            }
        }
    }
    repaint(removeRow)
}

//消除占满的那行，并且上面的方块下落
function repaint(row) {
    let a = 0;
    let b = 0;
    row.forEach(value => {
        for (let i = 0; i < gameDivs[value].length; i++) {
            gameDivs[value][i].className = 'none';
        }
        // gameData.splice(value, 1);
        // gameData.unshift(rowNull);
        // drawing(gameData, gameDivs);
    });



    // for (let i = 0; i < row.length; i++) {
    //     for (let j = 0; j < gameDivs[row[i]].length; j++) {
    //         gameDivs[row[i]][j].className = 'none';
    //     }
    // }

    // for (let i = 0; i < row.length; i++) {
    //     gameData.splice(row[i], 1);
    //     gameData.unshift(rowNull);
    //     drawing(gameData, gameDivs);
    // }

}
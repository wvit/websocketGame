//对方进入房间
socket.on('enter', msg => {

});

//对方离开房间
socket.on('leave', msg => {

});

//双方数据交互
socket.on('message', data => {
    drawing(data.gameData, gameTwoDivs);
    drawing(data.nextData, nextTwoDivs);
    userTwoScores.innerHTML = data.scores;
    userTwoGameTime.innerHTML = data.gameTime;
});
//对方进入房间
socket.on('enter', msg => {

});

//对方离开房间
socket.on('leave', msg => {

});

//双方数据交互
socket.on('message', data => {
    console.log('收到数据')
    drawing(data[0], gameTwoDivs);
    drawing(data[1], nextTwoDivs);
});
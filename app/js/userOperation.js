//绑定键盘操作事件
bindEvent(document, 'keyup', ev => {
  if (ev.keyCode === 32) {
    createBlock.blockTypeChange();
  }
  if (ev.keyCode === 37 && !judgeRange(userOneX - 1, userOneY)) {
    userOneX--;
  }
  if (ev.keyCode === 39 && !judgeRange(userOneX + 1, userOneY)) {
    userOneX++;
  }
  if (ev.keyCode === 39 || ev.keyCode === 37 || ev.keyCode === 32) {
    gameMove(userOneX, userOneY);
  }
})

//游戏开始
bindEvent(document, 'click', () => {
  createBlock.selectType();
  beginGame();
})
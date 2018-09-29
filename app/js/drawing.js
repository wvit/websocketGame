init(gameData, gameDivs, '.game');
init(nextData, nextDivs, '.next');
drawing(gameData, gameDivs);
drawing(nextData, nextDivs);

//初始化界面游戏数据
function init(arr1, arr2, dom) {
  let wrap = query(dom);
  let wrapChild = document.createElement('div');
  for (let i = 0; i < arr1.length; i++) {
    let divRow = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let div = document.createElement('div');
      div.className = 'none';
      div.style.cssText = `top:${i*20}px;left:${j*20}px`;
      wrapChild.appendChild(div);
      divRow.push(div);
    }
    arr2.push(divRow);
  }
  wrap.appendChild(wrapChild);
}

//绘制游戏区界面
function drawing(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (arr1[i][j] === 0) {
        arr2[i][j].className = 'none';
      } else if (arr1[i][j] === 1) {
        arr2[i][j].className = 'done';
      } else if (arr1[i][j] === 2) {
        arr2[i][j].className = 'current';
      }
    }
  }
}

//把方块放入游戏区
function gameMove(posiX, posiY) {
  clearGame();
  for (let i = posiX; i < nextData.length + posiX; i++) {
    for (let j = posiY; j < nextData[0].length + posiY; j++) {
      if (nextData[j - posiY][i - posiX] === 2) {
        if (gameDivs[j] && gameDivs[j][i]) {
          gameDivs[j][i].className = 'current';
        }
      }
    }
  }
}

//刷新游戏区
function clearGame() {
  for (let i = 0; i < gameDivs.length; i++) {
    for (let j = 0; j < gameDivs[0].length; j++) {
      if (gameDivs[i][j].className === 'current') {
        gameDivs[i][j].className = 'none';
      }
    }
  }
}
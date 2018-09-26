init(gameData, gameDivs, '.game');
init(nextData, nextDivs, '.next');
drawing(gameData, gameDivs);
drawing(nextData, nextDivs);

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
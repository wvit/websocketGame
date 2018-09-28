class CreateBlock {
    constructor() {
        this.blockType = Math.floor(Math.random() * nextTypes.length);
        this.blockTypeChild = Math.floor(Math.random() * nextTypes[this.blockType].length);
    }
    selectType() {
        nextData = nextTypes[this.blockType][this.blockTypeChild];
        drawing(nextData, nextDivs);
    }
    blockTypeChange() {
        this.blockTypeChild >= nextTypes[this.blockType].length - 1 ? this.blockTypeChild = 0 : this.blockTypeChild++;
        this.selectType();
    }
}
const createBlock = new CreateBlock()
createBlock.selectType();
bindEvent(document, 'keyup', ev => {
    if (ev.keyCode === 32) {
        createBlock.blockTypeChange();
        clearGame();
        gameMove(userOneX, userOneY);
    }
})
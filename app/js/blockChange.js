class CreateBlock {
    constructor() {
        this.resetTypeIndex();
    }
    selectType() {
        nextData = nextTypes[this.blockType][this.blockTypeChild];
        drawing(nextData, nextDivs);
    }
    blockTypeChange() {
        let index = this.blockTypeChild;
        this.blockTypeChild >= nextTypes[this.blockType].length - 1 ? this.blockTypeChild = 0 : this.blockTypeChild++;
        if (!judgeRange(userOneX, userOneY, nextTypes[this.blockType][this.blockTypeChild])) {
            this.selectType();
        } else {
            this.blockTypeChild = index;
        }
    }
    resetTypeIndex() {
        this.blockType = randomNum(nextTypes.length);
        this.blockTypeChild = randomNum(nextTypes[this.blockType].length);
    }
}

const createBlock = new CreateBlock()
createBlock.selectType();
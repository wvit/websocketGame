//获取节点
function query(dom) {
    const obj = document.querySelectorAll(dom);
    return obj.length > 1 ? obj : obj[0];
}

//绑定事件
function bindEvent(obj, event, callback) {
    obj = obj.length > 1 ? obj : new Array(obj);
    obj.forEach((item, index) => {
        item.index = index;
        item.addEventListener(event, callback);
    });
}

//生成一个范围(0~x)的随机数
function randomNum(num) {
    return Math.floor(Math.random() * num);
}
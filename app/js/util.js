//1,获取节点
function query(dom) {
    const obj = document.querySelectorAll(dom);
    return obj.length > 1 ? obj : obj[0];
}
//////////////////////////////////////////////////////
//2,绑定事件
function bindEvent(obj, event, callback) {
    obj = obj.length > 1 ? obj : new Array(obj);
    obj.forEach((item, index) => {
        item.index = index;
        item.addEventListener(event, callback);
    });
}
//////////////////////////////////////////////////////
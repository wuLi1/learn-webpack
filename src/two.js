function two() {
    let element = document.createElement('div');
    element.innerHTML = 'qq我是第二个入口文件qqqq';
    return element;
}
document.getElementById('root').appendChild(two());
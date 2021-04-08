var menu = document.getElementById('js-menu-toggle');
var cancel = document.getElementById('js-menu-cancel');

menu.onclick = function () {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('menu-is-open');
};

cancel.onclick = function () {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('menu-is-open');
};
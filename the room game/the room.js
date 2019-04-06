var table = document.getElementById("table");
var background = document.getElementById("back-ground");

table.addEventListener('click',function(e){
    background.setAttribute('class', 'scaleTable');
    addHtml = `
        <div id="bottle"></div>
        <div id="back"></div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    backButton();
});

var mirror = document.getElementById("mirror");
mirror.addEventListener('click',function(e){
    console.log("hello");
});
var drawers = document.getElementById("drawers");
drawers.addEventListener('click',function(e){
    console.log("halo");
});
var door = document.getElementById("door");
door.addEventListener('click',function(){
    console.log("door");
});

function backButton() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        console.log("zzz")
        background.removeAttribute('class', 'scaleTable');
    })
}
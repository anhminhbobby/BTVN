var table = document.getElementById("table");
var background = document.getElementById("back-ground");
var back = document.getElementById('back');

// Initial:
back.style.display = 'none';

table.addEventListener('click',function(e){
    back.style.display = 'block';
    background.setAttribute('class', 'scaleTable');
    addHtml = `
        <div id="bottle"></div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var bottle = document.getElementById("bottle");
    bottle.addEventListener('click', function (e) {
        addHtml = `
        <pre id="messagebottle">The bottle is now filled
with water. Drink it?</pre>
        `;
        background.insertAdjacentHTML('afterbegin', addHtml);
        var messagebottle = document.getElementById("messagebottle");
        messagebottle.addEventListener('click', function(e) {
            messagebottle.remove();
        });
    });
    backButton1();
});

var mirror = document.getElementById("mirror");
mirror.addEventListener('click',function(e){
    back.style.display = "block";
    background.setAttribute('class',"scaleMirror");
    backButton()
});
var drawers = document.getElementById("drawers");
drawers.addEventListener('click',function(e){
    addHtml = `
    <div id=safelock>
    <form>
        <label for="pscd">Enter 8-digit passcode: </label>
        <input type="number" id="pscd">
        <input type="button" value="Unlock" id="unlock" />
    </form>
    </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var unlock = document.getElementById("unlock");
    unlock.addEventListener('click', function (e) {
        var confirmPassword = "68911111";
        var password = document.getElementById("pscd").value;
        if (password == confirmPassword) {
             window.location="welcome.html";
        }
        else {
            alert("Wrong passcode.");
        }
    });
});
var door = document.getElementById("door");
door.addEventListener('click',function(){
    console.log("door");
});

var paper = document.getElementById("papers");
paper.addEventListener('click',function(e){
    addHtml = `
        <div id="newspaper">
        <img src="oldnewspaper.png" alt="Newspaper with some clue.">
        </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var newspaper = document.getElementById("newspaper");
    newspaper.addEventListener('click', function(e) {
        newspaper.remove();
    })
})
var box = document.getElementById("box");
box.addEventListener("click",function(e){
    addHtml = `
        <div id="match">
        <img src="RedTopSafety Matchbox.png" alt="Matchbox">
        </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var match = document.getElementById("match");
    match.addEventListener('click', function(e) {
        match.remove();
    })
})

function backButton1() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
        bottle.remove();
        messagebottle.remove();
    })
}

function backButton() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
    })
}
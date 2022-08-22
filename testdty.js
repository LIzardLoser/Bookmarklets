//code to add it ↓
javascript:(function(){window.s0=document.createElement('script');window.s0.setAttribute('type','text/javascript');window.s0.setAttribute('src','https://bookmarkify.it/bookmarklets/52278/raw');document.getElementsByTagName('body')[0].appendChild(window.s0);})();
//code to add it ↑

//source code
var page = window.open();

page.document.body.style.backgroundColor = "black";
page.document.body.style.color = "white";
page.document.title = "HEYYO";

var buttoon = page.document.createElement("button");
buttoon.innerHTML = "Titties";
buttoon.style.backgroundColor = "black";
buttoon.style.color = "white";
buttoon.style.border = "2px solid orange";

buttoon.onmouseover = function(){
    buttoon.style.backgroundColor = "orange";
    buttoon.style.color = "black";
};

buttoon.onmouseleave = function(){
    buttoon.style.backgroundColor = "black";
    buttoon.style.color = "white";
};

buttoon.onclick = function(){
    page.alert("I <3 TITTIES")
}

page.document.body.append(buttoon);

var h = page.document.createElement("h1");
h.innerHTML = "also Titties";
page.document.body.append(h);
//source code

var page = window.open('');

page.document.body.style.backgroundColor = "black";
page.document.body.style.color = "white";
page.document.title = "HEYYO";

var buttoon = page.document.createElement("button");
buttoon.innerHTML = "Alert";
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
    setTimeout(() => {
        page.alert(textb.value);
    }, secondstowait.value);
}

page.document.body.append(buttoon);

var textb = page.document.createElement("textarea");
textb.value = "Type Here";
textb.style.border = "2px solid orange";
textb.style.backgroundColor = "black";
textb.style.color = "white";

textb.onclick = function(){
    if (textb.value == "Type Here"){
        textb.value = "";
    }
    if (textb.value == ""){
        textb.value = "Type Here"
    }
};
page.document.body.append(textb);

var secondstowait = page.document.createElement('input');
secondstowait.value = "Please choose how many MS to wait";
secondstowait.style.border = "2px solid orange";
secondstowait.style.backgroundColor = "black";
secondstowait.style.color = "white";

secondstowait.onclick = function(){
    secondstowait.value = ""
    if (secondstowait.value == ""){
        secondstowait.value = "Please choose how many MS to wait"
    }
};

page.document.body.appendChild(secondstowait);

var h = page.document.createElement("h1");
h.innerHTML = "also Titties";
page.document.body.append(h);

/*
javascript:(function(){
    bookmarklet = document.createElement("script");
    bookmarklet.setAttribute("type", "text/javascript");
    bookmarklet.setAttribute("src", "(input raw code here)");
    document.getElementsByTagName('body')[0].appendChild(bookmarklet);
  })
*/

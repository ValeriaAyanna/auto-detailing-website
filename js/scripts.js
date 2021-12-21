function clickFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show-menu");
}
window.onclick = function(event) {

    if (!event.target.matches('.dropdown-button')) {
        if (openDropdown.classList.contains('show-menu')) {
            openDropdown.classList.remove('show-menu');
        }
    } else if (event.target.matches('.dropdown-button')) {
        openDropdown.classList.add('show-menu');
    }
}

function click3(clickedId) {

    document.getElementById(clickedId).classList.toggle("show-panel");
}
window.onclick = function(event) {

    if (!event.target.matches('.accordion')) {
        if (faqanswer.classList.contains('show-panel')) {
            faqanswer.classList.remove('show-panel');
        }
    } else if (event.target.matches('.accordion')) {
        faqanswer.classList.add('show-panel');
    }
}



function clickFunction2() {
    var question = document.getElementsByClassName("accordion");
    var answer = document.getElementsByClassName("faq-answer");

    document.getElementsByClassName("accordion").classList.toggle("active");
}
window.onclick = function(event) {
    if (!event.target.matches('.accordion')) {
        if (question.classList.contains('active')) {
            question.classList.remove('active');
            answer.classList.add('panel');
            window.alert("closed panel");
        }
    } else if (event.target.matches('.accordion')) {
        question.classList.add('active');
        answer.classList.remove('panel');
        window.alert("opened panel");
    }
}

/*var acc = document.getElementsByClassName("accordion");
var i;

acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel 
    /*this.classList.toggle("active");

    window.alert("past Active");
    /* Toggle between hiding and showing the active panel 
    var panel = document.getElementsByClassName("faq-answer");

    if (panel.classList.contains('panel')) {
        panel.classList.remove('panel');
        panel.classList.toggle("active").remove;
    } else {
        panel.classList.add('panel');
        panel.classList.toggle("active").remove;
        window.alert("active removed");
    }
});*/

/*
for (let i = 0; i < acc.length; i++) {
    window.alert("inside for");
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel 
        this.classList.toggle("active");

        window.alert("past active");
        /* Toggle between hiding and showing the active panel 
        var panel = document.getElementsByClassName("faq-answer");

        if (panel.classList.contains('panel')) {
            panel.classList.remove('panel');
        } else {
            panel.classList.add('panel');
            panel.classList.toggle("active").remove;
            window.alert("active removed");
        }
    });
    window.alert("reading");
}*/
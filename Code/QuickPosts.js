var _QuickPosts = [];

function quickPost(Message, CurrentDate){

    this.message = Message;
    this.currentDate = CurrentDate;

}

console.log(_QuickPosts.length);

//QuickPost Area

_QuickPosts.push(new quickPost("Quick-Post Test!", "26th/Dec/2017"));
_QuickPosts.push(new quickPost("Merry Late Christmas now that I think about it!", "26th/Dec/2017"));
_QuickPosts.push(new quickPost("Finally done with these Quick-posts... They took 2 HOURS!", "26th/Dec/2017"));
_QuickPosts.push(new quickPost("And just a random post on the 28th. (:", "28th/Dec/2017"));
_QuickPosts.push(new quickPost("Happy end of 2017!", "31st/Dec/2017"));
_QuickPosts.push(new quickPost("HAPPY NEW YEAR!!!", "1st/Jan/2018"));
_QuickPosts.push(new quickPost("The snowy background is gone for another year...", "12th/Jan/2018"));

//QuickPost Area

var currentQuickPost = 0;

document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1].message;
document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1].currentDate;

document.getElementById("la_btn").setAttribute("disabled", "disabled");

document.getElementById("ra_btn").addEventListener("click", function(){

    document.getElementById("ra_btn").setAttribute("disabled", "disabled");
    document.getElementById("la_btn").removeAttribute("disabled");

    if(currentQuickPost + 1 < _QuickPosts.length - 1){
        currentQuickPost += 1;
        console.log(currentQuickPost);
        requestAnimationFrame(textFadeOut1);

        document.getElementById("ra_btn").removeAttribute("disabled");
    }else if(currentQuickPost < _QuickPosts.length - 1){
        currentQuickPost += 1;
        console.log(currentQuickPost);
        requestAnimationFrame(textFadeOut1);
    }
});

document.getElementById("la_btn").addEventListener("click", function(){

    document.getElementById("la_btn").setAttribute("disabled", "disabled");
    document.getElementById("ra_btn").removeAttribute("disabled");

    if(currentQuickPost > 1){
        currentQuickPost -= 1;
        console.log(currentQuickPost);
        requestAnimationFrame(textFadeOut1);

        document.getElementById("la_btn").removeAttribute("disabled");
    }else if(currentQuickPost > 0){
        currentQuickPost -= 1;
        console.log(currentQuickPost);
        requestAnimationFrame(textFadeOut1);
    }else{

    }

});

function textFadeOut1(){
    document.getElementById("QuickPost").style.opacity -= 0.03;
    document.getElementById("QuickPostDate").style.opacity -= 0.03;

    if(document.getElementById("QuickPost").style.opacity > 0) {

        requestAnimationFrame(textFadeOut1);

    }else{

        document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].message;
        document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].currentDate;

        document.getElementById("QuickPost").style.opacity = 0;
        document.getElementById("QuickPostDate").style.opacity = 0;

        requestAnimationFrame(textFadeIn1);

    }
}

function textFadeIn1(){

    console.log("SUCCESS!");

    document.getElementById("QuickPost").style.opacity += 0.99;
    document.getElementById("QuickPostDate").style.opacity += 0.99;

}
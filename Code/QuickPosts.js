var _QuickPosts = [];

function quickPost(Message, CurrentDate){

    this.message = Message;
    this.currentDate = CurrentDate;

}

console.log(_QuickPosts.length);

//QuickPost Area

_QuickPosts.push(new quickPost("Test!", "Dec/25/2017"));
_QuickPosts.push(new quickPost("Merry Christmas!", "Dec/25/2017"));
_QuickPosts.push(new quickPost("New Website!", "Dec/26/2017"));

//QuickPost Area

var currentQuickPost = 0;

document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1].message;
document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1].currentDate;

document.getElementById("la_btn").setAttribute("disabled", "disabled");

function nextQP(){

    document.getElementById("ra_btn").setAttribute("disabled", "disabled");
    document.getElementById("la_btn").removeAttribute("disabled");

    if(currentQuickPost + 1 < _QuickPosts.length - 1){
        currentQuickPost += 1;
        console.log(currentQuickPost);
        document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].message;
        document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].currentDate;

        document.getElementById("ra_btn").removeAttribute("disabled");
    }else if(currentQuickPost < _QuickPosts.length - 1){
        currentQuickPost += 1;
        console.log(currentQuickPost);
        document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].message;
        document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].currentDate;

    }

}

function previousQP(){

    document.getElementById("la_btn").setAttribute("disabled", "disabled");
    document.getElementById("ra_btn").removeAttribute("disabled");

    if(currentQuickPost > 1){
        currentQuickPost -= 1;
        console.log(currentQuickPost);
        document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].message;
        document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].currentDate;

        document.getElementById("la_btn").removeAttribute("disabled");
    }else if(currentQuickPost > 0){
        currentQuickPost -= 1;
        console.log(currentQuickPost);
        document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].message;
        document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1 - currentQuickPost].currentDate;
    }else{

    }

}
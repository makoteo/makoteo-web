function quickPost(Message, CurrentDate){

    this.message = Message;
    this.currentDate = CurrentDate;

}

console.log(_QuickPosts.length);

//QuickPost Area

_QuickPosts.push(new quickPost("Test!", "Dec/26/2017"));
_QuickPosts.push(new quickPost("Merry Christmas!", "Dec/26/2017"));
_QuickPosts.push(new quickPost("New Website!", "Dec/26/2017"));

//QuickPost Area

document.getElementById("QuickPost").innerHTML=_QuickPosts[_QuickPosts.length - 1].message;
document.getElementById("QuickPostDate").innerHTML=_QuickPosts[_QuickPosts.length - 1].currentDate;

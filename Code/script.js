var _els = document.getElementsByClassName('parallax');
var _layers = [];
var _scrollY = window.scrollY;

var month = new Date().toLocaleString('en-En',{month: "long"});
var date = new Date().toLocaleString('en-En',{day: "numeric"});

console.log(month);
console.log(date);

//Christmas
if(month = "December"){
    if (parseInt(date) >= 15 ) {
        console.log("Merry Christmas");
        document.getElementById("Mountain_Ice").removeAttribute("hidden");
        document.getElementById("snow1").removeAttribute("hidden");
        document.getElementById("snow2").removeAttribute("hidden");
        document.getElementById("snow3").removeAttribute("hidden");
        document.getElementById("logo_ice").removeAttribute("hidden");
        document.getElementById("logo_santa_hat").removeAttribute("hidden");
        document.getElementById("foreground_ice").removeAttribute("hidden");
    }
}else if(month = "January"){
    if (parseInt(date) <= 10 ) {
        console.log("Merry Christmas");
    }
}else{

}

for(var i =0; i < _els.length; i++){
    var el = _els[i];
    var offset = el.dataset.offset;
    _layers.push({el: el, y: 0, offset: offset});
}

window.addEventListener('scroll', handle_scroll);
requestAnimationFrame(animate);

function handle_scroll(e){
    //_scrollY = window.scrollY;
    _scrollY = document.documentElement.scrollTop;
    //animate();
}

function animate(){
    //_scrollY = window.scrollY;
    _scrollY = document.documentElement.scrollTop;
    if(_scrollY < Math.sqrt(screen.width * screen.height)){
        for(var i =0; i < _layers.length; i++){
            var oldY = _layers[i].y;
            _layers[i].y = _scrollY * _layers[i].offset;

            if(oldY !== _layers[i].y) {
                _layers[i].el.style.transform = 'translate(0px , ' + _layers[i].y + 'px)';
            }
        }
    }

    requestAnimationFrame(animate);
}





var _els = document.getElementsByClassName('parallax');
var _layers = [];
var _scrollY = window.scrollY;

for(var i =0; i < _els.length; i++){
    var el = _els[i];
    var offset = el.dataset.offset;
    _layers.push({el: el, y: 0, offset: offset});
}

window.addEventListener('scroll', handle_scroll);
requestAnimationFrame(animate);

function handle_scroll(e){
    //_scrollY = window.scrollY;
    //animate();
}

function animate(){
    _scrollY = window.scrollY;
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
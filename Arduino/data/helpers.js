function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


function resizeCircle() {
    var h = window.innerHeight-20;
    var w = window.innerWidth-20;
    var size = (h>w) ? w :h;
    circle.style.width=size+"px";
    circle.style.height=size+"px";
    circle.style.marginTop = (h-size)/2-8+"px"
    point.style.height = Math.round(size*config.pointRatio)+"px";
    point.style.width = Math.round(size*config.pointRatio)+"px";

    pointRect = point.getClientRects()[0];
    // Update circle rects
    circlePos = circle.getClientRects()[0]
    
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
const _sliceCount = 13;
const sliceAngle = (2 * Math.PI) / _sliceCount;
const _textOffset = {x: 30, y: -5};
var _rotateCount = 0;

async function drawDial(ctx) {
        ctx.beginPath();
        ctx.translate(150,150);
        ctx.arc(0, 0, 100, 0, 2 * Math.PI);
        ctx.moveTo(0,0);

        for (var i=0;i<_sliceCount;i++){
            var text = i.toString();
            if (i == 3){
                text = i + ' 2020-08-10';
            }

            ctx.fillText(text, _textOffset.x, _textOffset.y);
            ctx.rotate(sliceAngle);
            ctx.moveTo(0,0);
            ctx.lineTo(100,0);
        }

        ctx.translate(-150,-150);

        ctx.stroke();
}

function init(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        drawLabels(ctx);
        drawDial(ctx);
    }
}

function rotate(){
    var canvas = document.getElementById('canvas');    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        _rotateCount++;
        drawLabels(ctx);
        ctx.clearRect(0,0,300,300);
        ctx.translate(150, 150);
        console.log('rotate');
        ctx.rotate(sliceAngle * -1 * _rotateCount);
        ctx.translate(-150,-150);
        drawDial(ctx);
        ctx.resetTransform();
    }
}

function drawLabels(ctx){
    ctx.fillText('NOW', 120, 0);
}
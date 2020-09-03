const _sliceCount = 13;
const sliceAngle = (2 * Math.PI) / _sliceCount;
const _textOffset = {x: 30, y: -5};
var _rotateCount = 0;
const _retention = 5; // retention partitions

async function drawDial(ctx) {
        ctx.beginPath();
        ctx.translate(150,150);
        ctx.arc(0, 0, 100, 0, 2 * Math.PI);
        ctx.moveTo(0,0);

        for (var i=0;i<_sliceCount;i++){
            ctx.rotate(sliceAngle);
            ctx.moveTo(0,0);
            ctx.lineTo(100,0);
        }

        ctx.translate(-150,-150);

        ctx.stroke();
        ctx.resetTransform();
        addItem();
}

function init(){
    var ctx = getContext();
    drawLabels(ctx);
    drawDial(ctx);
}

function rotate(){
    var ctx = getContext();
    _rotateCount++;
    ctx.clearRect(0,0,400,300);
    drawLabels(ctx);
    ctx.translate(150, 150);
    console.log('rotate');
    ctx.rotate(sliceAngle * -1 * _rotateCount);
    ctx.translate(-150,-150);
    drawDial(ctx);
    ctx.resetTransform();
}

function drawLabels(ctx){
    ctx.fillText(`Retention ${_retention} days`, 0, 40);
    ctx.fillText(`Day ${_rotateCount}`, 0, 50);
    ctx.translate(150, 150);
    ctx.fillText(`2020-09-0${_rotateCount + 1}`, 110, -5);
    ctx.translate(-150,-150);
}

function addItem(ctx){
    var ctx = getContext();
    ctx.translate(150, 150);
    console.log(`${_retention} - ${_rotateCount} = ${_retention - _rotateCount}`);
    var angle = sliceAngle * (_retention - _rotateCount);
    ctx.rotate(angle);
    ctx.fillText(`2020-09-0${_retention + 1}`, _textOffset.x, _textOffset.y);
    ctx.resetTransform();
}

function getContext(){
    var canvas = document.getElementById('canvas');    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        return ctx;
    }
    throw 'Failed to get 2d context';
}
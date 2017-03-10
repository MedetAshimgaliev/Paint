var canvasFront = document.getElementById('front-canvas'),
    canvasBack = document.getElementById('back-canvas'),
    ctxf = canvasFront.getContext('2d'),
    ctxb = canvasBack.getContext('2d');

var canvasWidth = document.getElementById('canvas-width'),
    canvasheight = document.getElementById('canvas-height');

var canvasPosition;

var mouseX, mouseY, 
    mouseXl = document.getElementById('mouseX'),
    mouseYl = document.getElementById('mouseY');

var tools = [], sizes = [];

tools.pencil = document.getElementById('pencil');
tools.eraser = document.getElementById('eraser');

sizes.small = document.getElementById('small');
sizes.middle = document.getElementById('middle');
sizes.big = document.getElementById('big');


var eraserSize = 8,
    eraserCursor = "url(''), auto";

var canvasClear = document.getElementById('clear-canvas'),
    fileImg = document.getElementById('file-img'),
    properties = document.getElementById('properties'),
    imgWidth = document.getElementById('img-width'),
    imgHeight = document.getElementById('img-height');

var startX = 100, startY = 100;
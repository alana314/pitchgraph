var canvas, circle, text, group;
$(document).ready(function(){

canvas = new fabric.Canvas('canvas');
circle = new fabric.Circle({
  radius: 100,
  fill: '#eef',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center'
});

text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
});

group = new fabric.Group([ circle, text ], {
  left: 500,
  top: 100,
  angle: -10
});

canvas.add(group);

scrollLeft();
});

function scrollLeft(){
	group.animate('left', '-=100', { onChange: canvas.renderAll.bind(canvas), duration: 1000, onComplete: setTimeout(function(){scrollLeft();}, 1000), easing: function (t, b, c, d) {return c*t/d + b;} });
}
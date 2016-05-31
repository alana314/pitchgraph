var canvas, circle, text, group, anim;
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

anim = setInterval(scrollLeft, 50);
});

function scrollLeft(){
  console.log('scroll left');
	group.set('left', group.left - 2);
  canvas.renderAll();
}
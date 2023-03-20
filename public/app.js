$(() => {
    // Document is loaded.
    console.log("Loaded. Let's rock! 🤘");


});



var stage = new Konva.Stage({
	container: 'canvas',
	width: 300,
	height: 400,
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
	x: stage.width() / 2,
	y: stage.height() / 2,
	radius: 70,
	fill: 'red',
	stroke: 'black',
	strokeWidth: 4,
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

/** Global */
let frontStage = undefined;
let backStage = undefined;
let sceneWidth = $("#front-canvas").width();
let sceneHeight = (sceneWidth * 4) / 3; 	// Height must be 3:4 of width


$(() => {
    // Document is loaded.
    console.log("Loaded. Let's rock! 🤘");

	// Initialize the Konva canvas
	konvaInit();

	// Attach window resize handler
	window.addEventListener('resize', fitStageIntoParentContainer);

});

/* ------------------------------------------------------------ *\
| Initialize Konva canvas 
\* ------------------------------------------------------------ */
const konvaInit = () => {
//#region
	$("#front-canvas").height(sceneHeight);
	
	/* ------------------------------------------------------------ *\
	| Front canvas 
	\* ------------------------------------------------------------ */
	// Set the frontStage 
	frontStage = new Konva.Stage({
		container: 'front-canvas',
		// Set initial width and height based on
		// value of input
		width: sceneWidth,
		height: sceneHeight,
	});
	
	// New layer
	var layer = new Konva.Layer();
	frontStage.add(layer);
	
	// add circle into center
	var circle = new Konva.Circle({
		radius: 50,
		fill: '#0096ff',
		x: frontStage.width() / 2,
		y: frontStage.height() / 2,
	});
	
	// Add to layer
	layer.add(circle);
	
	// Add an image for example
	var imageObj = new Image();
	imageObj.onload = () => {
		var img = new Konva.Image({
		x: 300,
		y: 300,
		image: imageObj,      
		});
	
		// add the shape to the layer
		layer.add(img);
	};
	
	imageObj.src = 'https://random.imagecdn.app/100/150';
	
	// Ad some text for example
	var simpleText = new Konva.Text({
		x: frontStage.width() / 2,
		y: 15,
		text: 'Example Text',
		fontSize: 30,
		fontFamily: 'Calibri',
		fill: 'black',
	});
	layer.add(simpleText)
	


	/* ------------------------------------------------------------ *\
	| Back canvas 
	\* ------------------------------------------------------------ */
	$("#back-canvas").height(sceneHeight);
	
	/* ------------------------------------------------------------ *\
	| Front canvas 
	\* ------------------------------------------------------------ */
	// Set the stage 
	backStage = new Konva.Stage({
		container: 'back-canvas',
		// Set initial width and height based on
		// value of input
		width: sceneWidth,
		height: sceneHeight,
	});
	
	// New layer
	var layer = new Konva.Layer();
	backStage.add(layer);
	
	// add circle into center
	var circle = new Konva.Circle({
		radius: 50,
		fill: '#0096ff',
		x: backStage.width() / 2,
		y: backStage.height() / 2,
	});
	
	// Add to layer
	layer.add(circle);
	
	// Add an image for example
	var imageObj = new Image();
	imageObj.onload = () => {
		var img = new Konva.Image({
		x: 25,
		y: 25,
		image: imageObj,      
		});
	
		// add the shape to the layer
		layer.add(img);
	};
	
	imageObj.src = 'https://random.imagecdn.app/100/150';
	
	// Ad some text for example
	var simpleText = new Konva.Text({
		x: backStage.width() / 3,
		y: 30,
		text: 'Back Text',
		fontSize: 30,
		fontFamily: 'Calibri',
		fill: 'black',
	});
	layer.add(simpleText)


	// Adjust Konva to fit into shirt container
	fitStageIntoParentContainer();

//#endregion
}


/* ------------------------------------------------------------ *\
| When the window resizes, fit adjust Konva scale 
| https://konvajs.org/docs/sandbox/Responsive_Canvas.html
\* ------------------------------------------------------------ */
function fitStageIntoParentContainer() {
//#region
	var container = document.querySelector('#front-canvas');


	// Set height to 4:3
	const pixelWidth = container.offsetWidth;
	container.style.height = `${((pixelWidth * 4) / 3)}px`;    


	// now we need to fit stage into parent container
	var containerWidth = container.offsetWidth;
	var containerHeight = container.offsetHeight;

	// but we also make the full scene visible
	// so we need to scale all objects on canvas
	var scalex = containerWidth / sceneWidth;
	var scaley = containerHeight / sceneHeight;

	console.log(scalex, scaley)

	// Set width and height
	for (stage of [frontStage, backStage]) {
		stage.width(sceneWidth * scalex);
		stage.height(sceneHeight * scaley);
	
	
		// Scale the stage to match adjusted width
		stage.scale({ x: scalex, y: scaley });
	}

//#endregion
}

/* ------------------------------------------------------------ *\
| Export Thumbnail 
\* ------------------------------------------------------------ */
$("#thumb").click(() => {

	

});


/* ------------------------------------------------------------ *\
| Show / Hide Back
\* ------------------------------------------------------------ */
$("#switch").click(() => {
	$("#back-canvas, #back-img, #front-canvas, #front-img").toggle();
	$("#switch").text() == "Back"
		? $("#switch").text("Front")
		: $("#switch").text("Back")
		
})
// https://qawithexperts.com/article/javascript/easy-way-to-convert-html-to-pdf-using-javascript/335
// function generatePDF(elemID) {
// 	var doc = new jsPDF();  //create jsPDF object
// 	 doc.fromHTML(document.getElementById(elemID), // page element which you want to print as PDF
// 	 15,
// 	 15, 
// 	 {
// 	   'width': 170  //set width
// 	 },
// 	 function(a) 
// 	  {
// 	   doc.save("HTML2PDF.pdf"); // save file name as HTML2PDF.pdf
// 	 });
// }

var canvasEl = document.getElementById('canvas');
canvasEl.style.border="solid 1px black";

// Setup canvas
var canvas = new fabric.Canvas('canvas');
canvas.setHeight(750);
canvas.setWidth(1000);

// Set background image to Nestldown
var imgElement = document.getElementById("nestldown")
var imgInstance = new fabric.Image(imgElement);
canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas), {
  originX: 'left',
  originY: 'top',
  left: 0,
  top: 0
});

// function renderImage(file) {

//   // generate a new FileReader object
//   var reader = new FileReader();
//   var filter = new fabric.Image.filters.RemoveWhite({
//     threshold: 40,
//     distance: 140
//   });

//   // inject an image with the src url
//   reader.onload = function(event) {
//     imgElement = document.createElement('img');
//     imgElement.src = event.target.result;
//     var imgInstance = new fabric.Image(imgElement, {
//       left: 100,
//       top: 100,
//     });
//     imgInstance.setControlsVisibility({
//         mt: false,
//         mb: false,
//         ml: false,
//         mr: false,
//         tr: false,
//         tl: false,
//         br: false,
//         bl: false
//     });
//     imgInstance.set('hasRotatingPoint', true);
//     imgInstance.set('lockScalingX', true);
//     imgInstance.set('lockScalingY', true);
//     imgInstance.filters.push(filter);
//     imgInstance.applyFilters(canvas.renderAll.bind(canvas))
//     canvas.add(imgInstance);
//   }
//   // when the file is read it triggers the onload event above.
//   reader.readAsDataURL(file);
// }

function renderImageOnClick(image) {
  // generate a new FileReader object
  var filter = new fabric.Image.filters.RemoveWhite({
    threshold: 40,
    distance: 140
  });

  // inject an image with the src url
  var imgInstance = new fabric.Image(image, {
    left: 100,
    top: 100,
  });
  imgInstance.setControlsVisibility({
      mt: false,
      mb: false,
      ml: false,
      mr: false,
      tr: false,
      tl: false,
      br: false,
      bl: false
  });
  imgInstance.set('hasRotatingPoint', true);
  imgInstance.set('lockScalingX', true);
  imgInstance.set('lockScalingY', true);
  imgInstance.filters.push(filter);
  imgInstance.applyFilters(canvas.renderAll.bind(canvas))
  canvas.add(imgInstance);
}



// function renderBackground(file){
//   // generate a new FileReader object
//   var reader = new FileReader();

//   // inject an image with the src url
//   reader.onload = function(event) {
//     var imgElement = document.createElement('img');
//     imgElement.src = event.target.result;
//     var imgInstance = new fabric.Image(imgElement);
//     canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas), {
//       originX: 'left',
//       originY: 'top',
//       left: 0,
//       top: 0
//     });
//   }
//   reader.readAsDataURL(file);
// }

// document.getElementById('file-input').onchange = function() {
//     renderImage(this.files[0]);
// };


// document.getElementById('background-input').onchange = function() {
//     renderBackground(this.files[0]);
// };

document.getElementById('chair1').onclick = function(e){
  var chair = document.getElementById("chair1-actual");
  renderImageOnClick(chair);
}
document.getElementById('chair2').onclick = function(e){
  var chair2 = document.getElementById("chair2-actual");
  renderImageOnClick(chair2);
}
document.getElementById('sofa1').onclick = function(e){
  var sofa1 = document.getElementById("sofa1-actual");
  renderImageOnClick(sofa1);
}
document.getElementById('arbor').onclick = function(e){
  var arbor = document.getElementById("arbor-actual");
  renderImageOnClick(arbor);
}


var canvasEl = document.getElementById('canvas');
canvasEl.style.border="solid 1px black";

var canvas = new fabric.Canvas('canvas');
canvas.setHeight(750);
canvas.setWidth(1000);

function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();
  var filter = new fabric.Image.filters.RemoveWhite({
    threshold: 40,
    distance: 140
  });

  // inject an image with the src url
  reader.onload = function(event) {
    imgElement = document.createElement('img');
    imgElement.src = event.target.result;
    var imgInstance = new fabric.Image(imgElement, {
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
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}

function renderBackground(file){
  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    var imgElement = document.createElement('img');
    imgElement.src = event.target.result;
    var imgInstance = new fabric.Image(imgElement);
    canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas), {
      originX: 'left',
      originY: 'top',
      left: 0,
      top: 0
    });
  }
  reader.readAsDataURL(file);
}

document.getElementById('file-input').onchange = function() {
    renderImage(this.files[0]);
};


document.getElementById('background-input').onchange = function() {
    renderBackground(this.files[0]);
};